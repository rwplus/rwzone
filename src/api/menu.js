const Menu =  [
  { header: 'Apps' },
  {
    title: '+空间',
    group: 'apps',
    icon: 'fa-home',
    name: 'Dashboard',
  },
  {
    title: '应用',
    group: 'widgets',
    component: 'widgets',
    icon: 'fa-braille',
    items: [
      { name: '钉钉API', title: '钉钉API', component: 'Dingtalk',action:'fa-code'},
      { name: '数据校验', title: '数据校验', component: 'Crud',action:'fa-code'}
    ]
  },
  { header: 'Extras' },
  {
    title: 'Pages',
    group: 'extra',
    icon: 'list',
    items: [
      { name: 'Login', title: 'Login', component: 'Login' ,action:'fa-sign-in'}
    ]
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
