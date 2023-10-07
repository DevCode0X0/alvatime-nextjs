//@ts-nocheck
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const wooApi = new WooCommerceRestApi({
  url: 'https://alvatime.com',
  consumerKey: 'ck_2e9ca54da38061c0612daa05082bbe34fcfd5a7c',
  consumerSecret: 'cs_bd0417f1390061dd10351c56eda49ae81e8e3491',
  version: 'wc/v3',
  queryStringAuth: true
});
