/* tslint:disable */
/* eslint-disable */
/**
 * Cardano Wallet Backend API
 * <p align=\"right\"><img style=\"position: relative; top: -10em; margin-bottom: -12em;\" width=\"20%\" src=\"https://cardanodocs.com/img/cardano.png\"></img></p> 
 *
 * OpenAPI spec version: 2021.3.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { ApiCoinSelectionInputs, WalletsAssetsAvailable, WalletswalletIdpaymentfeesAmount } from ".";

/**
 * 
 * @export
 * @interface ApiCoinSelectionInputs
 */
export interface ApiCoinSelectionInputScripts {
    /**
     * 
     * @type {string}
     * @memberof ApiCoinSelectionInputScripts
     */
    script: any;
    /**
     * 
     * @type {WalletswalletIdpaymentfeesAmount}
     * @memberof ApiCoinSelectionInputScripts
     */
    amount: WalletswalletIdpaymentfeesAmount;
    /**
     * A flat list of assets.
     * @type {Array&lt;WalletsAssetsAvailable&gt;}
     * @memberof ApiCoinSelectionInputScripts
     */
    assets?: WalletsAssetsAvailable[];
    /**
     * A unique identifier for this transaction
     * @type {string}
     * @memberof ApiCoinSelectionInputScripts
     */
    id: any;
    /**
     * A path for deriving a child key from a parent key.
     * @type {Array&lt;string&gt;}
     * @memberof ApiCoinSelectionInputScripts
     */
    derivation_path?: string[];
    /**
     * 
     * @type {number}
     * @memberof ApiCoinSelectionInputScripts
     */
    index: any;
}
