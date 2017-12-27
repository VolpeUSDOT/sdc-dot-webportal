import { Component, OnInit } from '@angular/core';
import {ApiGatewayService} from '../../../services/apigateway.service';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-workstation',
  templateUrl: './workstation.component.html',
  styleUrls: ['./workstation.component.css']
})
export class WorkstationComponent implements OnInit {
    selectedStack: string;
    stacks: any = [];
    streamingUrl: any;
    constructor(
        private gatewayService: ApiGatewayService,
        private toastyService: ToastyService,
        private toastyConfig: ToastyConfig) { }

    ngOnInit() {
        this.getAssociatedStacks();
    }

    getAssociatedStacks() {
        this.gatewayService.get('stacks').subscribe(
            (response: any) => {
                this.stacks = response.mappings;
                console.log(this.stacks);
            }
        );
    }

    launchWorkstation(stack: any) {
        this.selectedStack = stack;
        this.gatewayService.get('streaming-url?stack_name=' + this.selectedStack).subscribe(
            (response: any) => {
                this.toastyService.success('Successfully launch stack');
                this.streamingUrl = response;
                if (this.streamingUrl != null) {
                    window.open(this.streamingUrl);
                } else {
                    console.log('Failed to launch stack!');
                    this.toastyService.error('Failed to launch stack');
                }
            }
        );
    }
}
