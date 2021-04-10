define([
    'jquery',
    'mage/utils/wrapper'
], function ($, wrapper) {
    'use strict';

    return function (payloadExtender) {
        return wrapper.wrap(payloadExtender, function (originalAction, payload) {
            payload = originalAction(payload);
            payload.addressInformation.extension_attributes.delivery_date = jQuery('[name="delivery_date"]').val();
            return payload;
        });
    };
})
