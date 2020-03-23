import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/generic-view/generic-view.module').then(m => m.GenericViewModule),
    data: { breadcrumb: '' }
  },
  {
    path: 'filter-quality',
    data: { breadcrumb: 'Filter Quality' },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'audit-rules'
      },
      {
        path: 'audit-rules',
        data: { breadcrumb: 'Audit Rules' },
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'diagnose'
          },
          {
            path: 'diagnose',
            loadChildren: () => import('./modules/diagnose/diagnose.module').then(m => m.DiagnoseModule),
            data: { breadcrumb: 'Diagnose' },
          }
        ],
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
