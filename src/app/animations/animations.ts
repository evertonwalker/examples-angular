import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({
        opacity: 0
    })),
    transition(':enter, :leave', [
        // transition('void <=> *', -> duas maneiras de dizer através do aliás ou usando os estados.
        animate(1000, style({
            transform: 'translateX(200px)',
        })),
    ]),
]);
