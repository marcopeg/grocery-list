
require('es6-promise').polyfill();
import {
    init,
    clear,
    getItem,
    setItem,
    removeItem,
} from 'services/storage-service';

describe('Storage Service', function () {

    beforeEach(function (done) {
        init().then(done);
    });

    afterEach(function (done) {
        clear().then(done);
    });

    it('should initialize', function (done) {
        init().then(done);
    });

    it('should get default values for non existing keys', function (done) {
        getItem('foo', 'aaa').then(value => {
            expect(value).to.equal('aaa');
            done();
        }).catch(done);
    });

    it('should set/get values', function (done) {
        setItem('foo', 123)
        .then(() => getItem('foo', 'aaa'))
        .then(val => {
            expect(val).to.equal(123);
            done();
        })
        .catch(done);
    });

    it('should remove values', function (done) {
        setItem('foo', 123)
        .then(() => removeItem('foo'))
        .then(deletedKey => getItem(deletedKey))
        .then(val => {
            expect(val).to.equal(null);
            done();
        })
        .catch(done);
    });

});
