// 此处不要导入 @/i18n 使用 i18n.global ，因为我们在 router 中 layout 不是按需加载，
// 所以会在 Guide 会在 I18n 初始化完成之前被直接调用。导致 i18n 为 undefined
const steps = (i18n) => {
  return {
    // 禁止点击蒙版关闭
    allowClose: false,
    // 显示游览的进度
    showProgress: true,
    // 显示按钮 控制上一步，下一步
    //   showButtons: [i18n.t('msg.guide.prev'), 'previous'],
    doneBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev'),
    steps: [
      {
        element: '#guide-start',
        popover: {
          title: i18n.t('msg.guide.guideTitle'),
          description: i18n.t('msg.guide.guideDesc'),
          side: 'bottom-right'
        }
      },
      {
        element: '#guide-hamburger',
        popover: {
          title: i18n.t('msg.guide.hamburgerTitle'),
          description: i18n.t('msg.guide.hamburgerDesc')
        }
      },
      {
        element: '#guide-breadcrumb',
        popover: {
          title: i18n.t('msg.guide.breadcrumbTitle'),
          description: i18n.t('msg.guide.breadcrumbDesc')
        }
      },
      {
        element: '#guide-search',
        popover: {
          title: i18n.t('msg.guide.searchTitle'),
          description: i18n.t('msg.guide.searchDesc'),
          side: 'bottom-right'
        }
      },
      {
        element: '#guide-full',
        popover: {
          title: i18n.t('msg.guide.fullTitle'),
          description: i18n.t('msg.guide.fullDesc'),
          side: 'bottom-right'
        }
      },
      {
        element: '#guide-theme',
        popover: {
          title: i18n.t('msg.guide.themeTitle'),
          description: i18n.t('msg.guide.themeDesc'),
          side: 'bottom-right'
        }
      },
      {
        element: '#guide-lang',
        popover: {
          title: i18n.t('msg.guide.langTitle'),
          description: i18n.t('msg.guide.langDesc'),
          side: 'bottom-right'
        }
      },
      {
        element: '#guide-tags',
        popover: {
          title: i18n.t('msg.guide.tagTitle'),
          description: i18n.t('msg.guide.tagDesc')
        }
      },
      {
        element: '#guide-sidebar',
        popover: {
          title: i18n.t('msg.guide.sidebarTitle'),
          description: i18n.t('msg.guide.sidebarDesc'),
          side: 'right-center'
        }
      }
    ]
  }
}

export default steps
