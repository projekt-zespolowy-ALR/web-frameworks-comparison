import {NgModule} from "@angular/core";
import {AppModule} from "./app.module";
import {AppComponent} from "./app.component";
import {CounterModule} from "./counter/counter.module";
@NgModule({
	imports: [AppModule, CounterModule],
	bootstrap: [AppComponent],
})
export class AppServerModule {}
