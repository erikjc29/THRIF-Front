import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';

const logeado = localStorage.getItem('userId') ? true : false;

const routes: Routes = [
  { path: '', component:true? HomepageComponent: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'create-product', component: true ? CreateProductComponent : LoginComponent },
  { path: 'edit-product/:id', component: true? EditProductComponent: LoginComponent },
  { path: 'store/:id', component: true?  UserDetailComponent: LoginComponent },
  { path: 'cart', component: true?  CartComponent:LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
