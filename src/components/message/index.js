import Notification from './notification';

const prefixCls = 'u-message';
const iconPrefixCls = 'u-icon';
const prefixKey = 'u_message_key_';

const defaults = {
    top: '20%',
    duration: 1.5
};

let messageInstance;
let name = 1;

const iconTypes = {
    'info': 'ios-information-circle',
    'success': 'iconcommon_icon_cb_s',
    'warning': 'ios-alert',
    'error': 'iconcommon_icon_hint',
    'loading': 'ios-loading'
};

function getMessageInstance () {
    messageInstance = messageInstance || Notification.newInstance({
        prefixCls: prefixCls,
        styles: {
            top: `${defaults.top}`
        }
    });

    return messageInstance;
}

function notice (content = '', duration = defaults.duration, type, onClose = function () {}, closable = false, render = function () {}) {
    const iconType = iconTypes[type];

    // if loading
    const loadCls = type === 'loading' ? ' u-load-loop' : '';

    let instance = getMessageInstance();

    instance.notice({
        name: `${prefixKey}${name}`,
        duration: duration,
        styles: {},
        transitionName: 'move-up',
        content: `
            <div class="${prefixCls}-custom-content ${prefixCls}-${type}">
                <i class="${iconPrefixCls} ${iconType} ${loadCls} iconfont"></i>
                <span>${content}</span>
            </div>
        `,
        render: render,
        onClose: onClose,
        closable: closable,
        type: 'message'
    });

    // 用于手动消除
    return (function () {
        let target = name++;

        return function () {
            instance.remove(`${prefixKey}${target}`);
        };
    })();
}

export default {
    name: 'Message',

    info (options) {
        return this.message('info', options);
    },
    success (options) {
        return this.message('success', options);
    },
    warning (options) {
        return this.message('warning', options);
    },
    error (options) {
        return this.message('error', options);
    },
    loading (options) {
        return this.message('loading', options);
    },
    message(type, options){
        if (typeof options === 'string') {
            options = {
                content: options
            };
        }
        return notice(options.content, options.duration, type, options.onClose, options.closable, options.render);
    },
    config (options) {
        if (options.top || options.top === 0) {
            defaults.top = options.top;
        }
        if (options.duration || options.duration === 0) {
            defaults.duration = options.duration;
        }
    },
    destroy () {
        let instance = getMessageInstance();
        messageInstance = null;
        instance.destroy('u-message');
    }
};
