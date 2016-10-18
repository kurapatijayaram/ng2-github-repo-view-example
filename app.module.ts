import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { RepoViewerModule } from "ng2-github-repo-view";

@NgModule({
    declarations: [
                  HomeComponent
                  ],

    imports:      [
                  BrowserModule,
                  CommonModule,
                  HttpModule,
                  RepoViewerModule],

    bootstrap:    [HomeComponent]
})
export class AppModule {

}
