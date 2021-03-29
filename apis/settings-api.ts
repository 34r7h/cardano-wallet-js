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
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { BadRequest } from '../models';
import { Body22 } from '../models';
import { InlineResponse20015 } from '../models';
import { UnsupportedMediaType } from '../models';
/**
 * SettingsApi - axios parameter creator
 * @export
 */
export const SettingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return the current settings. 
         * @summary Get settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettings: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Overwrite current settings. 
         * @summary Update settings
         * @param {Body22} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSettings: async (body: Body22, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling putSettings.');
            }
            const localVarPath = `/settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingsApi - functional programming interface
 * @export
 */
export const SettingsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return the current settings. 
         * @summary Get settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSettings(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20015>> {
            const localVarAxiosArgs = await SettingsApiAxiosParamCreator(configuration).getSettings(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Overwrite current settings. 
         * @summary Update settings
         * @param {Body22} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putSettings(body: Body22, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await SettingsApiAxiosParamCreator(configuration).putSettings(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SettingsApi - factory interface
 * @export
 */
export const SettingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Return the current settings. 
         * @summary Get settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSettings(options?: any): AxiosPromise<InlineResponse20015> {
            return SettingsApiFp(configuration).getSettings(options).then((request) => request(axios, basePath));
        },
        /**
         * <p align=\"right\">status: <strong>stable</strong></p>  Overwrite current settings. 
         * @summary Update settings
         * @param {Body22} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putSettings(body: Body22, options?: any): AxiosPromise<void> {
            return SettingsApiFp(configuration).putSettings(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingsApi - object-oriented interface
 * @export
 * @class SettingsApi
 * @extends {BaseAPI}
 */
export class SettingsApi extends BaseAPI {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Return the current settings. 
     * @summary Get settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public getSettings(options?: any) {
        return SettingsApiFp(this.configuration).getSettings(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Overwrite current settings. 
     * @summary Update settings
     * @param {Body22} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApi
     */
    public putSettings(body: Body22, options?: any) {
        return SettingsApiFp(this.configuration).putSettings(body, options).then((request) => request(this.axios, this.basePath));
    }
}