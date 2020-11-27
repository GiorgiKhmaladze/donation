import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { RegisterComponent } from 'src/app/modules/register/register.component';
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

  public burgerIcon = false;
  private currentRouteSubscription: Subscription;
  private menuChildrenRef: [];
  menuItems = [
    {
      title: 'მთავარი',
      route: '/home',
      icon: 'fa fa-home'
    },
    {
      title: 'დახმარება',
      route: '/donate',
      icon: 'fa fa-heart'
    },
    {
      title: 'ივენთები',
      route: '/events',
      icon: 'fa fa-server'
    },
    {
      title: 'კონტაქტი',
      route: '/contact',
      icon: 'fa fa-bookmark'
    },
    {
      title: 'ტურნირი',
      route: '/tournaments',
      icon: 'fa fa-star'
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
    this.dialog.open(LoginComponent, {
      data: { message: 'I am a dynamic component inside of a dialog!' },
      dialogState: true,
      height: 500,
      width: 400,
      closeDelay: 300,
      animationStart: 'zoomIn',
      animationEnd: 'zoomOut'
    }).afterClosed.subscribe((result: any) => {
      if (result === 'register') {
        setTimeout(() => {
          this.dialog.open(RegisterComponent, {
            data: { message: 'I am a dynamic component inside of a dialog!' },
            dialogState: true,
            height: 350,
            width: 400,
            closeDelay: 300,
            animationStart: 'zoomIn',
            animationEnd: 'zoomOut'
          }).afterClosed.subscribe((res: any) => {
            console.log('dialog closed', res);
          });
        }, 300);
      }
    });
  }
}
