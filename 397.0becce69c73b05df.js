"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[397],{397:(O,u,a)=>{a.r(u),a.d(u,{HeroesModule:()=>M});var p=a(755),c=a(591),e=a(20),h=a(702);function m(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"li")(1,"a",2)(2,"span",3),e._uU(3),e.qZA(),e._uU(4),e.qZA(),e.TgZ(5,"a",4),e.NdJ("click",function(){const s=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.onDelete(s))}),e._uU(6," \u{1f191} "),e.qZA()()}if(2&n){const t=r.$implicit,o=e.oxw();e.ekj("selected",t===o.selectHero),e.xp6(1),e.MGl("routerLink","/heroes/detail/",t.id,""),e.xp6(2),e.Oqu(t.id),e.xp6(1),e.hij(" ",t.name," ")}}let g=(()=>{class n{constructor(){this.heroes=[{name:"",id:0}],this.AuxselectHero=new e.vpe,this.selectHero={name:"",id:0}}onDelete(t){this.selectHero=t,this.AuxselectHero.emit(this.selectHero)}ngOnDestroy(){console.log("DESTROY LISTA HIJA")}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list"]],inputs:{heroes:"heroes"},outputs:{AuxselectHero:"AuxselectHero"},decls:2,vars:1,consts:[[1,"heroes"],[3,"selected",4,"ngFor","ngForOf"],["href","#ni",3,"routerLink"],[1,"badge"],["href","#ni",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"ul",0),e.YNc(1,m,7,5,"li",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",o.heroes))},dependencies:[p.sg,c.rH],styles:[".heroes[_ngcontent-%COMP%]{margin:0 0 2em;list-style-type:none;padding:0;width:15em}.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;position:relative;left:0;background-color:#eee;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px;display:flex;justify-content:space-between}.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#607d8b;background-color:#ddd;left:.1em}.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#cfd8dc;color:#fff}.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#bbd8dc;color:#fff}.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-block;font-size:small;color:#fff;padding:.8em .7em 0;background-color:#405061;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;margin-right:.8em;border-radius:4px 0 0 4px}a[_ngcontent-%COMP%]{border:0;text-decoration:none}.showdetail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#00008b}"]}),n})(),_=(()=>{class n{constructor(t,o){this.heroService=t,this.router=o,this.heroes=[],this.selectHero={name:"",id:0},this.getHeroes=()=>{this.heroService.getHeroes("Heroes").subscribe(i=>{console.log("actualizo heroes"),this.heroes=i})},this.onDelete=i=>{this.selectHero=i,this.heroes=[],this.heroService.deleteHeroe(i.id).subscribe(s=>{this.heroes=s,this.router.navigate(["/heroes/herovacio"])})}}ngOnInit(){this.getHeroes()}onSelect(t){}ngOnDestroy(){console.log("DESTROY LISTA PADRE")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.e),e.Y36(c.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-heroes"]],decls:7,vars:1,consts:[["routerLink","anadir"],[1,"wraper"],[3,"heroes","AuxselectHero"]],template:function(t,o){1&t&&(e.TgZ(0,"ul")(1,"li")(2,"a",0),e._uU(3,"Alta"),e.qZA()()(),e.TgZ(4,"div",1)(5,"app-list",2),e.NdJ("AuxselectHero",function(s){return o.onDelete(s)}),e.qZA(),e._UZ(6,"router-outlet"),e.qZA()),2&t&&(e.xp6(5),e.Q6J("heroes",o.heroes))},dependencies:[c.lC,c.rH,g],styles:["ul[_ngcontent-%COMP%]{display:flex}li[_ngcontent-%COMP%]{list-style:none;padding:10px}.wraper[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),n})();var l=a(30);function f(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"h2"),e._uU(2),e.ALo(3,"uppercase"),e.qZA(),e.TgZ(4,"h4"),e._uU(5,"Update User: "),e.TgZ(6,"span"),e._uU(7),e.qZA()(),e.TgZ(8,"label"),e._uU(9,"Name: "),e.TgZ(10,"input",1),e.NdJ("ngModelChange",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.hero.name=i)}),e.qZA()(),e.TgZ(11,"button",2),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.updateHero(i.hero))}),e._uU(12,"\u270d\ufe0f Update"),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(2),e.hij("",e.lcZ(3,3,t.hero.name)," Details"),e.xp6(5),e.Oqu(t.hero.id),e.xp6(3),e.Q6J("ngModel",t.hero.name)}}let C=(()=>{class n{constructor(t,o,i){this.rutaActiva=t,this.heroService=o,this.router=i,this.hero={name:"",id:0},this.updateHero=s=>{this.heroService.updateHeroe(s).subscribe(d=>{this.hero=s,this.router.navigate(["/heroes/herovacio"])})},this.hero.id=this.rutaActiva.snapshot.params.id,this.paramsSubscription=this.rutaActiva.params.subscribe(s=>{this.hero.id=s.id||0,this.heroService.getHeroe(this.hero.id).subscribe(d=>{this.hero={name:d.name,id:d.id}})})}ngOnInit(){}ngOnDestroy(){console.log("DESTROY DETAIL unsubscribe"),this.paramsSubscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.gz),e.Y36(h.e),e.Y36(c.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-detail"]],decls:2,vars:1,consts:[[4,"ngIf"],["placelhoder","name","type","text",3,"ngModel","ngModelChange"],[3,"click"]],template:function(t,o){1&t&&(e._UZ(0,"HR"),e.YNc(1,f,13,5,"div",0)),2&t&&(e.xp6(1),e.Q6J("ngIf",o.hero))},dependencies:[l.Fj,l.JJ,l.On,p.O5,p.gd],styles:["h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:25px}button[_ngcontent-%COMP%]{font-family:Verdana,Geneva,Tahoma,sans-serif}input[type=text][_ngcontent-%COMP%]{height:19px;padding:0 5px;font-family:verdana}"]}),n})();function x(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"h2"),e._uU(2),e.qZA(),e.TgZ(3,"p")(4,"label"),e._uU(5,"Id: "),e.TgZ(6,"span"),e._uU(7),e.qZA()()(),e.TgZ(8,"label"),e._uU(9,"Name: "),e.TgZ(10,"input",1),e.NdJ("ngModelChange",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.hero.name=i)}),e.qZA()(),e.TgZ(11,"button",2),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.addHero())}),e._uU(12,"\u270d\ufe0f Add"),e.qZA(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(2),e.hij("A\xf1adir Heroe ",t.hero.name,""),e.xp6(5),e.Oqu(t.hero.id),e.xp6(3),e.Q6J("ngModel",t.hero.name)}}const A=[{path:"",component:_,children:[{path:"anadir",component:(()=>{class n{constructor(t,o){this.heroService=t,this.router=o,this.showAdd=!0,this.hero={name:"",id:0},this.getLasHeroe(1)}ngOnInit(){}getLasHeroe(t){this.hero.name="",this.showAdd=!0,this.heroService.getIdLastHeroe().subscribe(o=>{this.hero.id=o})}addHero(){this.showAdd=!1,this.heroService.addHeroe(this.hero).subscribe(t=>this.router.navigate(["/heroes/herovacio"]))}ngOnDestroy(){console.log("DESTROY ANADIR")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.e),e.Y36(c.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-anadir"]],decls:2,vars:1,consts:[[4,"ngIf"],["placelhoder","name","type","text",3,"ngModel","ngModelChange"],[3,"click"]],template:function(t,o){1&t&&(e._UZ(0,"HR"),e.YNc(1,x,13,3,"ng-container",0)),2&t&&(e.xp6(1),e.Q6J("ngIf",o.showAdd))},dependencies:[l.Fj,l.JJ,l.On,p.O5],styles:["h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:25px}button[_ngcontent-%COMP%]{font-family:Verdana,Geneva,Tahoma,sans-serif}input[type=text][_ngcontent-%COMP%]{height:19px;padding:0 5px;font-family:verdana}h2[_ngcontent-%COMP%]{padding-bottom:1rem}p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}"]}),n})()},{path:"herovacio",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-empty"]],decls:2,vars:0,template:function(t,o){1&t&&(e.TgZ(0,"div"),e._uU(1,"vacioooooooooo"),e.qZA())}}),n})()},{path:"detail/:id",component:C}]}];let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(A),c.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.u5,p.ez,H]}),n})()}}]);