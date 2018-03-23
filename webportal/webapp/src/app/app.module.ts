import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './app.routes';
import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatTableModule, MatRadioModule } from '@angular/material';
import { MatExpansionModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { HomeFaqComponent } from './main/faq/faq.component';
import { AccountComponent } from './account/account.component';
import { DatasetsComponent } from './account/datasets/datasets.component';
import { AccountHomeComponent } from './account/accounthome/accounthome.component';
import { CognitoService } from '../services/cognito.service';
import { ApiGatewayService } from '../services/apigateway.service';
import { WorkstationComponent } from './account/workstation/workstation.component';
import { RegisterComponent } from './main/register/register.component';
import { ToastyModule } from 'ng2-toasty';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogBoxComponent } from './account/dialog-box/dialog-box.component';
import { MarkdownModule } from 'ngx-md';
import { FaqComponent } from './account/faq/faq.component';
import { DatasetinfoComponent } from './main/datasetinfo/datasetinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    AccountComponent,
    AccountHomeComponent,
    DatasetsComponent,
    WorkstationComponent,
    RegisterComponent,
    DialogBoxComponent,
    FaqComponent,
    HomeFaqComponent,
    DatasetinfoComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatCheckboxModule,
    MarkdownModule.forRoot(),
    ToastyModule.forRoot(),
  ],
  exports: [BrowserModule, ToastyModule],
  providers: [
    CognitoService,
    ApiGatewayService
  ],
  entryComponents: [DialogBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
