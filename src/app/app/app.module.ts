import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import {HttpClientModule} from "@angular/common/http";

import { calendar3 } from "ngx-bootstrap-icons";

import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/components/header/header.component';

import { WorkersPageComponent, MainPageComponent} from './shared/pages';
import { AgePipe } from './shared/pipes/age.pipe';
import { RolePipe } from './shared/pipes/role.pipe';
import { ModalComponent } from './shared/components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddWorkerComponent } from './shared/components/add-worker/add-worker.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { FilterByNamesPipe } from './shared/pipes/filter-by-names.pipe';
import { FilterBySurnamesPipe } from './shared/pipes/filter-by-surnames.pipe';

const icons = {
  calendar3
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    WorkersPageComponent,
    AgePipe,
    RolePipe,
    ModalComponent,
    AddWorkerComponent,
    FilterComponent,
    FilterByNamesPipe,
    FilterBySurnamesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgbModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
