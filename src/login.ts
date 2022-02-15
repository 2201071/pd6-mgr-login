import YQ from './yq/yq';
import mdui from 'mdui';
export default class Login {
    btnLogin: HTMLButtonElement;
    txtUsername: HTMLInputElement;
    txtPassword: HTMLInputElement;

    constructor() {
        this.btnLogin = document.getElementById('btnLogin') as HTMLButtonElement;
        this.txtUsername = document.getElementById('username') as HTMLInputElement;
        this.txtPassword = document.getElementById('password') as HTMLInputElement;
        this.btnLogin.addEventListener('click', () => {
            if (!this.chkInput()) {
                return;
            }
            // mdui.alert('这里应该开始登录', 'TODO'); // TODO
            window.location.href = '../pd6-mgr';
        });
    }

    chkInput():boolean {
        const maxUser: number = 16;
        const maxPwd: number = 512;
        let alertStr: string = '';
        if (this.txtUsername.value.length == 0) {
            alertStr += YQ.divById('usernameNil').innerHTML;
        } else if (this.txtUsername.value.length > maxUser) {
            alertStr += `用户名最多支持 ${maxUser} 个字符。`;
        }
        if (this.txtPassword.value.length == 0) {
            alertStr += YQ.divById('passwordNil').innerHTML;
        } else if (this.txtUsername.value.length > maxPwd) {
            alertStr += `密码最多支持 ${maxPwd} 个字符。`;
        }
        if (alertStr.length > 0) {
            mdui.alert(alertStr, '输入不正确');
            return false;
        }
        return true;
    }
}