import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CounterModule} from "./counter/counter.module";
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, CounterModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
