

export default {
  props: {
    columns: {
      type: Array,
      default: () => {
        return []
      },
    },
    dataSource: {
      type: Array,
      default: () => {
        return []
      }
    },
    noData: {
      type: [Boolean, String],
      default: () => {
        return true
      }
    },
    loading: {
      type: [Boolean, String],
      default: () => {
        return false
      }
    }
  },

  methods: {
    theadTh(item, createElement, style) {
      let { $scopedSlots } = this;
      return createElement(
        'dt', {
          style
        }, $scopedSlots[`${item.key}Th`]({ title: item.title, items: item }),
      )
    },
    thead(createElement) {
      let { columns, $scopedSlots, theadTh } = this;
      return <div class="ui-table-thead">
        <dl>
          {
            columns.map(item => {

              let style = {
                width: `${item.width ? item.width : ''}px`,
                flex: `${item.width ? 'none' : 1}`,
                "text-align": item.align
              }, Props = {
                style
              };
         

              if ($scopedSlots[`${item.key}Th`] && item.key != 'operation') {

                return theadTh(item, createElement, style)
              }
              return <dt {...Props} >{item.title}</dt>
            })
          }
        </dl>
      </div>
    },
    tbodyTdType(createElement, items, item, index) {
      let { $scopedSlots, slotTd } = this;
      if (typeof (item.onFilter) === "function") {
        return item.onFilter(items, this);
      }
      if (item.slot) {
        return $scopedSlots[`${item.key}Td`] ? slotTd(createElement, items, index, item.key) : ""
      }
      return items[item.key];
    },
    slotTd(createElement, items, index, key) {
      let { $scopedSlots } = this;
    
      return createElement(
        'div', {
        
        }, $scopedSlots[`${key}Td`]({ items, index })
      )
    },
    tbodyTd(items, createElement, index) {
      let { columns, tbodyTdType } = this;
      return <dd class="ui-table-tr">
        {
          columns.map(item => {
            let Props = {
              props: {
                data: item
              },
              style: {
                width: `${item.width ? item.width : ''}px`,
                flex: `${item.width ? '' : 1}`,
                "text-align": item.align
              }
            };
            return <div class="ui-table-td" {...Props} >
              {tbodyTdType(createElement, items, item, index)}
            </div>
          })
        }
      </dd>
    },
    details(createElement, items, index) {

      let { $scopedSlots } = this;
      return createElement(
        'dd', {
          'class': {
            'ui-table-details': true,

          },
        }, $scopedSlots.details({ items, index }),
      )
    },
    dataList(createElement) {
      let { dataSource, tbodyTd, $scopedSlots, details } = this;

      return dataSource.map((items, index) => {
        return <dl>{tbodyTd(items, createElement, index)}
          {
            $scopedSlots.details ? details(createElement, items, index) : ""
          }
        </dl>
      })
    },
    loadingHtml(createElement){
      let  {$scopedSlots} = this;
  
      return $scopedSlots.loading?createElement('div',{
        'class':{
          'ui-table-loading': true
        }
      },$scopedSlots.loading()):
        <div class="ui-table-loading">
        <i class="iconfont iconjiazaizhong"></i>
      </div>
    },
    noHtml(createElement){
      let  {$scopedSlots} = this;
      return $scopedSlots.noData?createElement('div',{
        'class':{
          'ui-table-noData': true
        }
      },$scopedSlots.noData()): <div class="ui-table-noData">
        <i class="iconfont iconmeiyoushuju"></i>
        
      </div>
    },
    tbody(createElement) {
      let {  loading,loadingHtml,dataList,dataSource,noHtml } = this;
    
      return <div class="ui-table-tbody" >
        {
          loading?loadingHtml(createElement):dataList(createElement)
          
        }
        {
          dataSource.length===0&&loading===false?noHtml(createElement):""
        }
      </div>
    }
  },
  render(createElement) {
    let { thead, tbody } = this;

    return <div class="ui-table">
      {thead(createElement)}
      {tbody(createElement)}
    </div>
  }
}