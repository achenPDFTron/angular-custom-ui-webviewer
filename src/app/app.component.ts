import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('viewer') private viewer!: ElementRef;
  @ViewChild('scrollView') private scrollView!: ElementRef;

  ngAfterViewInit(): void {
    // @ts-ignore
    const CoreControls = window.CoreControls;
    CoreControls.setWorkerPath('/lib/core');
    CoreControls.enableFullPDF(true);

    const docViewer = new CoreControls.DocumentViewer();

    docViewer.setScrollViewElement(this.scrollView.nativeElement);
    docViewer.setViewerElement(this.viewer.nativeElement);
    docViewer.setOptions({ enableAnnotations: true });
    docViewer.loadDocument('/files/webviewer-demo-annotated.pdf');
  }
}
