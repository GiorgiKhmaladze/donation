import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DonateComponent } from 'src/app/modules/donate/donate.component';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('menuItemBorder') menuItemBorder: ElementRef;
  @ViewChild('menuList') menuList: ElementRef;

  private currentRouteSubscription: Subscription;
  private menuChildrenRef: [];
  menuItems = [
    {
      title: 'მთავარი',
      route: '/home',
    },
    {
      title: 'დახმარება',
      route: '/donate',
    },
    {
      title: 'ივენთები',
      route: '/events',
    },
    {
      title: 'გალერეა',
      route: '/gallery',
    },
    {
      title: 'კონტაქტი',
      route: '/contact',
    }];
  constructor(private activatedRoute: ActivatedRoute, private headerService: HeaderService, private dialog: DialogService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.currentRouteSubscription = this.headerService.initialRouteSubscription.subscribe(data => {
      const children = [...this.menuList.nativeElement.children];
      const node = children.find(e => e.pathname.toLowerCase().includes(data));
      this.setStylesToActiveSpan(node);
    });
  }
  setStylesToActiveSpan(node: HTMLElement): void {
    this.menuItemBorder.nativeElement.style.width = node.offsetWidth + 'px';
    this.menuItemBorder.nativeElement.style.left = node.offsetLeft + 'px';
  }

  onMouseEnter(item: HTMLElement): void {
    this.setStylesToActiveSpan(item);
  }

  setActiveRoute(): void {
    const children = [...this.menuList.nativeElement.children];
    const route = this.activatedRoute.snapshot.children[0].data.key;
    const node = children.find(e => e.pathname.toLowerCase().includes(route));
    this.setStylesToActiveSpan(node);
  }
  ngOnDestroy(): void {
    this.currentRouteSubscription.unsubscribe();
  }

  donateNow(): void {
    this.dialog.open(DonateComponent, {
      data: { message: 'I am a dynamic component inside of a dialog!' },
      dialogState: true,
      height: 700,
      width: 500,
      closeDelay: 300,
      animationStart: 'zoomIn',
      animationEnd: 'zoomOut'
    }).afterClosed.subscribe((result: any) => {
      console.log('dialog closed', result);
    });
  }
}
