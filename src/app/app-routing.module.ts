import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './e404/e404.component';
import { LoginComponent } from './login/login.component';
import { SectionAssistenceComponent } from './section-assistence/section-assistence.component';
import { SectionsCardsComponent } from './sections-cards/sections-cards.component';
import { SectionsComponent } from './sections/sections.component';
import { AuthGuardService } from './services/auth-guard.service';

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
        canActivate: [AuthGuardService],
      },
      {
        path: ':section_id',
        component: SectionAssistenceComponent,
      },
    ],
  },
  {path: '**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
