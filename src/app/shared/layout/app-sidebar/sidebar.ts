import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { SidebarService } from '../../../../services/sideBarservices';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  LayoutDashboard,
  Calendar,
  Users,
  Settings,
  LucideAngularModule,
  LucideIconData,
  BlocksIcon,
  SpotlightIcon,
  ChartNoAxesColumn,
  ChessKing,
  TrendingUpDown,
  Scale,
  HatGlasses,
  Warehouse,
  ListCollapse,
  TrophyIcon,
} from 'lucide-angular';

type NavItem = {
  name: string;
  icon: LucideIconData;
  path?: string;
  new?: boolean;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
})
export class SidebarComponent {
  @Input() open = true;

  navItems: NavItem[] = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: 'dashboard',
    },
    {
      icon: Calendar,
      name: 'Portfolio Analysis',
      path: 'portfolio',
      subItems: [
        { name: 'Portfolio Analysis', path: '/portfolioAnalysis' },
        { name: 'Home Loan Consolidated', path: '/homeLoanConsolidated' },
        { name: 'Auto Loan Consolidated', path: '/autoLoanConsolidated' },
      ],
    },
    {
      icon: BlocksIcon,
      name: 'Early Warning Dashboard',
      path: 'EarlyWarningDashboard',
    },
    {
      icon: SpotlightIcon,
      name: 'Performance Monitoring',
      path: 'PerformanceMonitoring',
    },
    {
      icon: ChartNoAxesColumn,
      name: 'Risk Analysis',
      path: 'Riskanalysis',
    },
    {
      icon: ChessKing,
      name: 'Leader Board',
      path: 'LeaderBoard',
    },
    {
      icon: TrendingUpDown,
      name: 'Forcasting',
      path: 'Forecasting',
    },
    {
      icon: Scale,
      name: 'Decision analytics',
      path: 'DecisionAnalytics',
    },
    {
      icon: HatGlasses,
      name: 'Recovery & Legal',
      path: 'Recovery',
    },
    {
      icon: Warehouse,
      name: 'Repossession',
      path: 'Reposession',
    },
    {
      icon: ListCollapse,
      name: 'Foreclosure',
      path: 'Foreclosure',
    },
    {
      icon: TrophyIcon,
      name: 'Champion Challenger',
      path: 'ChampionChallenger',
    },
    {
      icon: LayoutDashboard,
      name: 'Group Level Dashboard',
      path: 'GroupLevelDashboard',
    },
    {
      icon: LayoutDashboard,
      name: 'JlgDashboard',
      path: '',
    },
    {
      icon: HatGlasses,
      name: 'Agent Dashboard',
      path: 'AgentDashboard',
    },
  ];
  openSubmenu: string | null | number = null;
  subMenuHeights: { [key: string]: number } = {};
  @ViewChildren('subMenu') subMenuRefs!: QueryList<ElementRef>;

  readonly isExpanded$;
  readonly isMobileOpen$;
  readonly isHovered$;

  private subscription: Subscription = new Subscription();

  constructor(
    public sidebarService: SidebarService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.isExpanded$ = this.sidebarService.isExpanded$;
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
    this.isHovered$ = this.sidebarService.isHovered$;
  }

  ngOnInit() {
    // Subscribe to router events
    this.subscription.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.setActiveMenuFromRoute(this.router.url);
        }
      })
    );

    this.subscription.add(
      combineLatest([this.isExpanded$, this.isMobileOpen$, this.isHovered$]).subscribe(
        ([isExpanded, isMobileOpen, isHovered]) => {
          if (!isExpanded && !isMobileOpen && !isHovered) {
            this.cdr.detectChanges();
          } else {
          }
        }
      )
    );
    this.setActiveMenuFromRoute(this.router.url);
  }

  ngOnDestroy() {
    // Clean up subscriptions
    this.subscription.unsubscribe();
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  toggleSubmenu(prefix: string, index: number) {
    const key = `${prefix}-${index}`;

    if (this.openSubmenu === key) {
      this.openSubmenu = null;
      return;
    }

    this.openSubmenu = key;

    setTimeout(() => {
      const el = document.getElementById(key);
      if (el) {
        this.subMenuHeights[key] = el.scrollHeight;
      }
    }, 0);
  }

  onSidebarMouseEnter() {
    this.isExpanded$
      .subscribe((expanded) => {
        if (!expanded) {
          this.sidebarService.setHovered(true);
        }
      })
      .unsubscribe();
  }

  private setActiveMenuFromRoute(currentUrl: string) {
    const menuGroups = [{ items: this.navItems, prefix: 'main' }];

    //   menuGroups.forEach(group => {
    //     group.items.forEach((nav, i) => {
    //       if (nav.subItems) {
    //         nav.subItems.forEach(subItem => {
    //           if (currentUrl === subItem.path) {
    //             const key = `${group.prefix}-${i}`;
    //             this.openSubmenu = key;

    //             setTimeout(() => {
    //               const el = document.getElementById(key);
    //               if (el) {
    //                 this.subMenuHeights[key] = el.scrollHeight;
    //                 this.cdr.detectChanges();
    //               }
    //             });
    //           }
    //         });
    //       }
    //     });
    //   }
    // );
  }

  onSubmenuClick() {
    console.log('click submenu');
    this.isMobileOpen$
      .subscribe((isMobile) => {
        if (isMobile) {
          this.sidebarService.setMobileOpen(false);
        }
      })
      .unsubscribe();
  }
}
