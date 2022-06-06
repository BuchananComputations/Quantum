import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderAnonComponent } from './components/header/header-anon/header-anon.component';
import { HeaderMemberComponent } from './components/header/header-member/header-member.component';
import { DiscoveryAnonComponent } from './components/header/header-anon/discovery-anon/discovery-anon.component';
import { FeedAnonComponent } from './components/header/header-anon/feed-anon/feed-anon.component';
import { NotificationsAnonComponent } from './components/header/header-anon/notifications-anon/notifications-anon.component';
import { PostAnonComponent } from './components/header/header-anon/post-anon/post-anon.component';
import { SignupAnonComponent } from './components/header/header-anon/signup-anon/signup-anon.component';
import { GlobalFeedComponent } from './components/header/header-member/global-feed/global-feed.component';
import { DiscoverComponent } from './components/header/header-member/discover/discover.component';
import { LocalComponent } from './components/header/header-member/local/local.component';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/account/dashboard/dashboard.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { ProfileEditComponent } from './components/account/profile-edit/profile-edit.component';
import { SettingsEditComponent } from './components/account/settings-edit/settings-edit.component';
import { UserListingsComponent } from './components/account/user-listings/user-listings.component';
import { ClassifiedSearchComponent } from './components/classified-search/classified-search.component';
import { ClassifiedFiltersComponent } from './components/classified-filters/classified-filters.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './auth/login/login.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { ConnectionsComponent } from './interface/connections/connections.component';
import { ActiveConnectionsComponent } from './auth/active-connections/active-connections.component';
import { FollowingComponent } from './auth/following/following.component';
import { UploadComponent } from './auth/upload/upload.component';
import { SuggestedComponent } from './auth/suggested/suggested.component';
import { OffersComponent } from './auth/offers/offers.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { AboutUsComponent } from './settings/about-us/about-us.component';
import { CreatorsComponent } from './settings/creators/creators.component';
import { SeekersComponent } from './settings/seekers/seekers.component';
import { SubscriptionComponent } from './settings/subscription/subscription.component';
import { NotificationComponent } from './communication/notification/notification.component';
import { MessageComponent } from './communication/message/message.component';
import { InstantMessageComponent } from './communication/instant-message/instant-message.component';
import { VideoStreamComponent } from './communication/video-stream/video-stream.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    CommentFormComponent,
    HeaderComponent,
    HeaderAnonComponent,
    HeaderMemberComponent,
    DiscoveryAnonComponent,
    FeedAnonComponent,
    NotificationsAnonComponent,
    PostAnonComponent,
    SignupAnonComponent,
    GlobalFeedComponent,
    DiscoverComponent,
    LocalComponent,
    AccountComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileEditComponent,
    SettingsEditComponent,
    UserListingsComponent,
    ClassifiedSearchComponent,
    ClassifiedFiltersComponent,
    LoginComponent,
    UserProfileComponent,
    ConnectionsComponent,
    ActiveConnectionsComponent,
    FollowingComponent,
    UploadComponent,
    SuggestedComponent,
    OffersComponent,
    SettingsComponent,
    AboutUsComponent,
    CreatorsComponent,
    SeekersComponent,
    SubscriptionComponent,
    NotificationComponent,
    MessageComponent,
    InstantMessageComponent,
    VideoStreamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    CommonModule,
    AuthModule.forRoot({
      domain: 'forcesale.us.auth0.com',
      clientId: 'ORihMlUHif5z7FiswGxGoBaTmMRKS7Ms'
    }),
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'forcesale.us.auth0.com',
      clientId: 'ORihMlUHif5z7FiswGxGoBaTmMRKS7Ms'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
