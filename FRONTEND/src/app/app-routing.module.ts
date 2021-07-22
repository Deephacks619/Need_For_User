import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SigninuserComponent} from './signinuser/signinuser.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ServicerDetailsComponent } from './servicer-details/servicer-details.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { ThanksgivingComponent } from './thanksgiving/thanksgiving.component';
import { Userpage2Component } from './userpage2/userpage2.component';
import { AnswerpageComponent } from './answerpage/answerpage.component';


const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'register',component:RegisterComponent},
  { path:'siginUsers',component:SigninuserComponent},
  { path:'UserPage',component:UserPageComponent,children:[
                                                          { path:'UserPages',component:Userpage2Component},
                                                          { path:'ServicerDetails',component:ServicerDetailsComponent},
                                                          { path:'ContactDonors',component:ChatUserComponent},
                                                          { path:'',redirectTo:'/UserPages',pathMatch:'full'}
  ]
},
  { path:'thanksgiving',component:ThanksgivingComponent},
  { path:'answerPage',component:AnswerpageComponent},
  { path:'',redirectTo:'/home' ,pathMatch:'full'},
  { path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
