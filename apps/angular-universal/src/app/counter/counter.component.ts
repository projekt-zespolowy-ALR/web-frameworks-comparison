import {isPlatformBrowser} from "@angular/common";
import {Component, Inject, PLATFORM_ID, effect, signal} from "@angular/core";

@Component({
	selector: "app-counter",
	templateUrl: "./counter.component.html",
	styleUrls: ["./counter.component.css"],
})
export class CounterComponent {
	counter = signal(0);
	constructor(@Inject(PLATFORM_ID) private platformId: Object) {
		if (isPlatformBrowser(this.platformId)) {
			effect(() => {
				window.alert(this.counter());
			});
		}
	}
	incrementCounter() {
		this.counter.update((v) => v + 1);
	}
}
