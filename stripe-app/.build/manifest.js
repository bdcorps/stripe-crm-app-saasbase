

import CustomerDetailView from '../src/views/CustomerDetailView';

import HomeOverviewView from '../src/views/HomeOverviewView';


export * from '@stripe/ui-extension-sdk/version';
export const BUILD_TIME = '2022-07-17 17:16:05.481579 -0400 EDT m=+0.016380876'

export {
	
	CustomerDetailView,
	
	HomeOverviewView,
	
};
export default {
  "id": "com.saasbase.stripe-app-fe",
  "version": "0.0.1",
  "name": "CRM Buddy",
  "icon": "",
  "permissions": [],
  "app_backend": {
    "webhooks": null
  },
  "ui_extension": {
    "views": [
      {
        "viewport": "stripe.dashboard.customer.detail",
        "component": "CustomerDetailView"
      },
      {
        "viewport": "stripe.dashboard.home.overview",
        "component": "HomeOverviewView"
      }
    ],
    "actions": [],
    "content_security_policy": {
      "connect-src": null,
      "image-src": null,
      "purpose": ""
    }
  },
  "post_install_action": null
}
