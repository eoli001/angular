import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild,ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  @Input() element: {type: string, name:string, content: string};
  @Input() name: string;
  @ViewChild('heading') Header : ElementRef;
  @ContentChild('ContentParagraph') Paragraph : ElementRef;
  constructor() { 
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  ngOnInit() {
    console.log('TestContent: ' + this.Header.nativeElement.textContent);
    console.log('TestContent of Paragraph: ' + this.Paragraph.nativeElement.textContent);
    console.log('ngOnInit called!');
  }

  ngDoCheck(){
    console.log('ngOnInit called!');
  }
  ngAfterContentInit(){
    console.log('TestContent of Paragraph: ' + this.Paragraph.nativeElement.textContent);
    console.log('ngAfterContentInit called!');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
    console.log('TestContent: ' + this.Header.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewtChecked called!');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }
}
