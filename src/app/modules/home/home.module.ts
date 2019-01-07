import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AmplifyAngularModule } from 'aws-amplify-angular';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, AmplifyAngularModule],
  exports: [HomePageComponent]
})
export class HomeModule {}
