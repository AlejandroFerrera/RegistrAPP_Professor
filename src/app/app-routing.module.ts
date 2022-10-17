import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SectionAssistenceComponent } from './section-assistence/section-assistence.component';
import { SectionsCardsComponent } from './sections-cards/sections-cards.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'sections',
    component: SectionsComponent,
    children: [
      {
        path: '',
        component: SectionsCardsComponent,
      },
      {
        path: ':section_id',
        component: SectionAssistenceComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
