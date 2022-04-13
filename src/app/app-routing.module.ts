import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactFormComponent } from './components/react-form/react-form.component';
import { PrinterComponent } from './printer/printer.component';
import { OnPushComponent } from './components/on-push/on-push.component';
import { InputChipsComponent } from './components/input-chips/input-chips.component';
import { AnimationsComponent } from './animations/animations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'template-driven', component: TemplateDrivenFormComponent },
  { path: 'react-form', component: ReactFormComponent },
  { path: 'input-chips', component: InputChipsComponent },
  {
    path: 'printer',
    component: PrinterComponent,
  },
  {
    path: 'on-push',
    component: OnPushComponent
  },
  {
    path: 'animations',
    component: AnimationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
