import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatRadioModule, MatCheckboxModule} from '@angular/material';
import { ApiGatewayService } from '../../../services/apigateway.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
    fileName: string;
    mailType: string;
    message: string;
    datasetName: string;
    userEmail: string;
    userName: string;
    showDataset: boolean;
    showAlgorithm: boolean;
    dataTypes = [
        {value: 'dataset', viewValue: 'Dataset'},
        {value: 'algorithm', viewValue: 'Algorithm'},
    ];

    Categories = [
        {value: 'raw', viewValue: 'Raw'},
        {value: 'curated', viewValue: 'Curated'},
        {value: 'published', viewValue: 'Published'},
    ];

    //cvPilotDataSets:string[] = new Array("Wyoming","Tampa Hillsborough Expressway Authority","New York City DOT","All Sites") 

    messageModel = {
        name: '',
        stateList: '',
        dotEmployee: '',
        dotEmployeeEmail: '',
        dotEmployeeExistingContract: '',        
        fileFolderName: '',
        type: 'dataset',
        category : '',
        bucketName: '',
        description: '',
        readmeFileName: '',
        geographicScope: '',
        dataAvailability: '',
        ProgrammingTool: '',
        isCVPilotTeamMember : '',
        cvPilotTeamName : '',
        isCVPilotIETMember : '',
        accessReason : '',
        cvPilotDataSets : ''
    };
    constructor(private gatewayService: ApiGatewayService, public snackBar: MatSnackBar,
        public dialogRef: MatDialogRef<DialogBoxComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {    this.messageModel.bucketName = data.bucketName;
                                                        this.mailType = data.mailType;
                                                        this.datasetName = data.datasetName;
                                                        this.messageModel.fileFolderName = data.datasetName;
                                                    }
    onNoClick(): void {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.userEmail = sessionStorage.getItem('email');
        this.userName = sessionStorage.getItem('username');

    }

    validateEmailRegex(email) {
        var regexEmail = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        return regexEmail.test(email);
    }

    sendMail() {
        if (this.mailType === 'Access Request Mail' && this.datasetName != 'U.S DOT Connected Vehicle Pilot (CVP) Evaluation Datasets') {
            this.message =  '<div>' +
                '    Hello,<br><br>' +
                '    Please approve the request for Dataset Access.<br>' +
                '    <ul>' +
                '        <li>Dataset Name = ' + this.datasetName + '</li>' +
                '        <li>Bucket Name = ' + this.messageModel.bucketName + '</li>' +
                '        <li>User is a USDOT employee or researcher = ' + this.messageModel.dotEmployee + '</li> <br>' +
                '        <li>USDOT employee email address = ' + this.messageModel.dotEmployeeEmail + '</li> <br>' +
                '        <li>User has a data agreement with the provider = ' + this.messageModel.dotEmployeeExistingContract + '</li> <br>' +
                '        <li>State List = ' + this.messageModel.stateList + '</li> <br>' +
                '        <li>Sender Name = ' + this.userName + '</li>' +
                '        <li>Sender E-mail id = ' + this.userEmail + '</li>' +
                '    </ul>' +
                '    Thanks, <br>' + this.userName +
                '</div>';
        } else {
            if (this.mailType === 'Access Request Mail' && this.datasetName == 'U.S DOT Connected Vehicle Pilot (CVP) Evaluation Datasets') {
                this.message =  '<div>' +
                    '    Hello,<br><br>' +
                    '    Please approve the request for Dataset Access.<br>' +
                    '    <ul>' +
                    '        <li>Dataset Name = ' + this.datasetName + '</li>' +
                    '        <li>Bucket Name = ' + this.messageModel.bucketName + '</li>' +
                    '        <li>User is a member of either the NYC, THEA or Wyoming CV Pilot Team? = ' + this.messageModel.isCVPilotTeamMember + '</li> <br>' +
                    '        <li>User is affiliated with CV Pilot Team = ' + this.messageModel.cvPilotTeamName + '</li> <br>' +
                    '        <li>User is a member of the CV Pilot Independent Evaluation Team? = ' + this.messageModel.isCVPilotIETMember + '</li> <br>' +
                    '        <li>User is requesting data access to CV Pilot datasets = ' + this.messageModel.cvPilotDataSets + '</li> <br>' +
                    '        <li>Reason for data access request to CV Pilot datasets = ' + this.messageModel.accessReason + '</li> <br>' +
                    '        <li>Sender Name = ' + this.userName + '</li>' +
                    '        <li>Sender E-mail id = ' + this.userEmail + '</li>' +
                    '    </ul>' +
                    '    Thanks, <br>' + this.userName +
                    '</div>';
            } else if (this.messageModel.type == 'dataset') {
                this.message = '<div> Hello,<br><br>Please approve the request for publishing the datasets.<br>' +
                    '    <ul>' +
                    '        <li>Dataset / Algorithm Name = ' + this.datasetName + '</li>' +
                    '        <li>Type = ' + this.messageModel.type + '</li>' +
                    '        <li>Category = ' + this.messageModel.category + '</li>' +
                    '        <li>File Name = ' + this.messageModel.name + '</li>' +
                    '        <li>Description = ' + this.messageModel.description + '</li>' +
                    '        <li>Readme / Data dictionary file name = ' + this.messageModel.readmeFileName + '</li>' +
                    '        <li>Geographic Scope = ' + this.messageModel.geographicScope + '</li>' +
                    '        <li>Start/End Date for Data Availability = ' + this.messageModel.dataAvailability + '</li> <br>' +
                    '        <li>Sender Name = ' + this.userName + '</li>' +
                    '        <li>Sender E-mail id = ' + this.userEmail + '</li>' +
                    '    </ul>' +
                    '    Thanks, <br>' + this.userName +
                    '</div>';
            } else if (this.messageModel.type == 'algorithm') {
                this.message = '<div> Hello,<br><br>Please approve the request for publishing the datasets.<br>' +
                    '    <ul>' +
                    '        <li>Dataset / Algorithm Name = ' + this.datasetName + '</li>' +
                    '        <li>Type = ' + this.messageModel.type + '</li>' +
                    '        <li>File Name = ' + this.messageModel.name + '</li>' +
                    '        <li>Description = ' + this.messageModel.description + '</li>' +
                    '        <li>Readme / Data dictionary file name = ' + this.messageModel.readmeFileName + '</li>' +
                    '        <li>Programming Tools/language = ' + this.messageModel.ProgrammingTool + '</li>  <br>' +
                    '        <li>Sender Name = ' + this.userName + '</li>' +
                    '        <li>Sender E-mail id = ' + this.userEmail + '</li>' +
                    '    </ul>' +
                    '    Thanks, <br>' + this.userName +
                    '</div>';
            }
        }
        this.gatewayService.sendRequestMail('send_email?sender=' + this.userEmail + '&message=' + this.message).subscribe(
            (response: any) => {
                this.snackBar.open('Your request has been sent successfully', 'close', {
                    duration: 2000,
                });
                this.onNoClick();
                console.log('Access Request Sent Successfully');
            }
        );
    }

}
