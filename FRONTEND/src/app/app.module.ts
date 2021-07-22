import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SigninuserComponent } from './signinuser/signinuser.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserPageComponent } from './user-page/user-page.component';
import { ServicerDetailsComponent } from './servicer-details/servicer-details.component';
import { ChatUserComponent } from './chat-user/chat-user.component';
import { ThanksgivingComponent } from './thanksgiving/thanksgiving.component';
import { Userpage2Component } from './userpage2/userpage2.component';
import { CardComponent } from './card/card.component';
import { AnswerpageComponent } from './answerpage/answerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninuserComponent,
    PageNotFoundComponent,
    HomeComponent,
    UserPageComponent,
    ServicerDetailsComponent,
    ChatUserComponent,
    ThanksgivingComponent,
    Userpage2Component,
    CardComponent,
    AnswerpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
