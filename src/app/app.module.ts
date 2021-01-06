import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CovalentHttpModule} from "@covalent/http";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentBaseEchartsModule} from "@covalent/echarts/base";
import {CovalentDynamicFormsModule} from "@covalent/dynamic-forms";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentStepsModule} from "@covalent/core/steps";
import {CovalentLayoutModule} from "@covalent/core/layout";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentBaseEchartsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
