import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DataPipePipe } from './data-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailComponent,
    QuoteFormComponent,
    DataPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
