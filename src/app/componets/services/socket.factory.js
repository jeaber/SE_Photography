/**
 * Created by jbz on 8/12/2015.
 */
import io from './../plugins/socketio/clientcdn';

const socket = angular.module('photography',[io])
    .factory('socket', () => {
        return io();
    });
export {socket};