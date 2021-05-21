import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('viewer', {static: false}) private viewer: ElementRef;
  @ViewChild('scrollView', {static: false}) private scrollView: ElementRef;

  constructor() {

  }

  ngAfterViewInit(): void {
    // @ts-ignore
    const CoreControls = window.CoreControls;
    CoreControls.setWorkerPath('/lib/core');
    CoreControls.enableFullPDF(true);

    const docViewer = new CoreControls.DocumentViewer();

    docViewer.setScrollViewElement(this.scrollView.nativeElement);
    docViewer.setViewerElement(this.viewer.nativeElement);
    docViewer.setOptions({ enableAnnotations: true });
    docViewer.loadDocument('/lib/core/webviewer-demo-annotated.pdf');

    // manually append iframe
    // const iframe = document.createElement('iframe');
    // iframe.setAttribute('width', '100%');
    // iframe.setAttribute('src', '/lib/core/pdf/iframe.html');
    // iframe.setAttribute('height', 'auto');
    // iframe.setAttribute('frameBorder', '0');
    // iframe.addEventListener('load', this.onIframeLoaded);
    // document.body.appendChild(iframe);
  }
  onIframeLoaded() {
    alert('hi');
  }
}
