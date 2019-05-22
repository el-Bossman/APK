import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tipo1', loadChildren: './tipo1/tipo1.module#Tipo1PageModule' },
  { path: 'tipo2', loadChildren: './tipo2/tipo2.module#Tipo2PageModule' },
  { path: 'acerca', loadChildren: './acerca/acerca.module#AcercaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
