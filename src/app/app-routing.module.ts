import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShowCustomersComponent } from './customer/show-customers/show-customers.component';
import { SearchCustomersComponent } from './customer/search-customers/search-customers.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'daftar',
    loadChildren: () => import('./daftar/daftar.module').then( m => m.DaftarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'form-laporan',
    loadChildren: () => import('./form-laporan/form-laporan.module').then( m => m.FormLaporanPageModule)
  },
  {
    path: 'edit-profil',
    loadChildren: () => import('./pages-in-profil/edit-profil/edit-profil.module').then( m => m.EditProfilPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pages-in-profil/pengaturan/pengaturan.module').then( m => m.PengaturanPageModule)
  },
  {
    path: 'tentang-mh',
    loadChildren: () => import('./pages-in-profil/tentang-mh/tentang-mh.module').then( m => m.TentangMHPageModule)
  },
  {
    path: 'ubah-kata-sandi',
    loadChildren: () => import('./pages-in-profil/ubah-kata-sandi/ubah-kata-sandi.module').then( m => m.UbahKataSandiPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./pages-in-profil/maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  { path: 'show', component: ShowCustomersComponent },
  { path: 'search', component: SearchCustomersComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
