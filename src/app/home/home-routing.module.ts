import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'beranda',
        children:[
          {
            path:'',
            loadChildren: () => import('../tabs/beranda/beranda.module').then( m => m.BerandaPageModule)
          }
        ]
      },
      {
        path:'notifikasi',
        children:[
          {
            path:'',
            loadChildren: () => import('../tabs/notifikasi/notifikasi.module').then( m => m.NotifikasiPageModule)
          }
        ]
      },
      {
        path:'profil',
        children:[
          {
            path:'',
            loadChildren: () => import('../tabs/profil/profil.module').then( m => m.ProfilPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
