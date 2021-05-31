import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestApplicationComponent } from './test-application.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestApplicationComponent]
})
export class TestApplicationModule {
  component=TestApplicationComponent
 }
