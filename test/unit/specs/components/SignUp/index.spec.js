import Vue from 'vue'
import {shallowMount, mount} from '@vue/test-utils'
import SignUp from '@/components/SignUp'

describe('SignUp', () => {
    describe('Given that SignUp is loaded', () => {
        const data = SignUp.data()
        
        it('should be with the name \'SignUp\'', () => expect(SignUp.name).toEqual('SignUp'))
        
        it('should contain a form details in \'data\'', () => expect(data.ruleForm).not.toBeNull())
        it('should have \'username\' in the form as empty string', () => expect(data.ruleForm.username).toEqual(''))
        it('should have \'password\' in the form as empty string', () => expect(data.ruleForm.password).toEqual(''))
        it('should have \'password2\' in the form as empty string', () => expect(data.ruleForm.password2).toEqual(''))

        it('should contain a set of validation rules in \'data\'', () => expect(data.rules).not.toBeNull())
        it('should contain validation rule of \'username\'', () => expect(data.rules.username instanceof Array).toBeTruthy())
        it('should contain non-empty validation rule for \'username\' on blur', () => expect(data.rules.username.find(r => r.ruleId === 'usernameNonEmpty'))
            .toEqual({required: true, message: '请输入用户名', trigger: 'blur', ruleId: 'usernameNonEmpty'}))
        it('should contain no-dup validation rule for \'username\' on blur', () => expect(data.rules.username.find(r => r.ruleId === 'usernameNoDup')).not.toBeNull())
        it('should contain validation rule of \'password\'', () => expect(data.rules.password instanceof Array).toBeTruthy())
        it('should contain non-empty validation rule for \'password\' on blur', () => expect(data.rules.password.find(r => r.ruleId === 'passwordNonEmpty'))
            .toEqual({required: true, message: '请输入密码', trigger: 'blur', ruleId: 'passwordNonEmpty'}))
        it('should contain validation rule of \'password2\'', () => expect(data.rules.password2 instanceof Array).toBeTruthy())
        it('should contain non-empty validation rule for \'password2\' on blur', () => expect(data.rules.password2.find(r => r.ruleId === 'password2NonEmpty'))
            .toEqual({required: true, message: '请确认密码', trigger: 'blur', ruleId: 'password2NonEmpty'}))
        it('should contain same-as validation rule for \'password2\' on blur', () => expect(data.rules.password2.find(r => r.ruleId === 'password2SameAsPassword')).not.toBeNull())
    })

    // fdescribe('Given that sign-up button is clicked', () => {
    //     jest.mock('axios', () => {
    //         get: jest.fn((() => Promise.resolve({data: 200})))
    //     })

    //     it('true', () => {
            
    //     })
    // })
})