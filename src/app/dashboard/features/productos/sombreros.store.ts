import { inject } from "@angular/core";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals"
import { SombrerosServices } from "./sombreros.service";
import { exhaustMap, map, pipe, switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";
import { rxMethod } from "@ngrx/signals/rxjs-interop";

type SombreroState = {
    sombreros:any[];
    isLoading: boolean;
}
const initialState: SombreroState = {
    sombreros : [],
    isLoading: false
}


export const SombrerosStore = signalStore(
    {protectedState:false, providedIn:'root'},
    withState(initialState),
    withMethods((store, sombreroService = inject(SombrerosServices)) => ({
        loadSombreros:rxMethod<void> (
            pipe(
                tap(()=>patchState(store, {isLoading: true})),
                switchMap(()=>{
                    return sombreroService.getSombreros().pipe(
                        tapResponse({
                            next: (sombreros) => patchState(store, { sombreros, isLoading: false }),
                            error: (err) => {
                              patchState(store, { isLoading: false });
                              console.error("error", err);
                        }})
                    )
                }),
            )
            
        ),

    }))
);