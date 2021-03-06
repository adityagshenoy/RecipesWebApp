import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'userpages', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  
{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
