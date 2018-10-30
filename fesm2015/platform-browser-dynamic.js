/**
 * @license Angular v7.1.0-beta.0+73.sha-62b4ff52
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */

import { Identifiers, getUrlScheme, syntaxError, StaticSymbolCache, JitCompiler, ProviderMeta, I18NHtmlParser, ViewCompiler, CompileMetadataResolver, UrlResolver, TemplateParser, NgModuleCompiler, JitSummaryResolver, SummaryResolver, StyleCompiler, PipeResolver, ElementSchemaRegistry, DomElementSchemaRegistry, ResourceLoader, NgModuleResolver, HtmlParser, CompileReflector, CompilerConfig, DirectiveNormalizer, DirectiveResolver, Lexer, Parser } from '@angular/compiler';
import { ANALYZE_FOR_ENTRY_COMPONENTS, ChangeDetectionStrategy, ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, LOCALE_ID, NgModuleFactory, NgModuleRef, QueryList, Renderer, Renderer2, SecurityContext, TRANSLATIONS_FORMAT, TemplateRef, ViewContainerRef, ViewEncapsulation, ɵCodegenComponentFactoryResolver, ɵEMPTY_ARRAY, ɵEMPTY_MAP, ɵReflectionCapabilities, ɵand, ɵccf, ɵcmf, ɵcrt, ɵdid, ɵeld, ɵinlineInterpolate, ɵinterpolate, ɵmod, ɵmpd, ɵncd, ɵnov, ɵpad, ɵpid, ɵpod, ɵppd, ɵprd, ɵqud, ɵregisterModuleFactory, ɵstringify, ɵted, ɵunv, ɵvid, Compiler, Inject, InjectionToken, Optional, PACKAGE_ROOT_URL, TRANSLATIONS, isDevMode, ɵConsole, MissingTranslationStrategy, COMPILER_OPTIONS, CompilerFactory, createPlatformFactory, platformCore, Injectable, Version, PLATFORM_ID, ɵglobal, defineInjectable, ɵgetInheritedFactory } from '@angular/core';
import { ɵPLATFORM_BROWSER_ID } from '@angular/common';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MODULE_SUFFIX = '';
/** @type {?} */
const builtinExternalReferences = createBuiltinExternalReferencesMap();
class JitReflector {
    constructor() {
        this.reflectionCapabilities = new ɵReflectionCapabilities();
    }
    /**
     * @param {?} type
     * @param {?} cmpMetadata
     * @return {?}
     */
    componentModuleUrl(type, cmpMetadata) {
        /** @type {?} */
        const moduleId = cmpMetadata.moduleId;
        if (typeof moduleId === 'string') {
            /** @type {?} */
            const scheme = getUrlScheme(moduleId);
            return scheme ? moduleId : `package:${moduleId}${MODULE_SUFFIX}`;
        }
        else if (moduleId !== null && moduleId !== void 0) {
            throw syntaxError(`moduleId should be a string in "${ɵstringify(type)}". See https://goo.gl/wIDDiL for more information.\n` +
                `If you're using Webpack you should inline the template and the styles, see https://goo.gl/X2J8zc.`);
        }
        return `./${ɵstringify(type)}`;
    }
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    parameters(typeOrFunc) {
        return this.reflectionCapabilities.parameters(typeOrFunc);
    }
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    tryAnnotations(typeOrFunc) { return this.annotations(typeOrFunc); }
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    annotations(typeOrFunc) {
        return this.reflectionCapabilities.annotations(typeOrFunc);
    }
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    shallowAnnotations(typeOrFunc) {
        throw new Error('Not supported in JIT mode');
    }
    /**
     * @param {?} typeOrFunc
     * @return {?}
     */
    propMetadata(typeOrFunc) {
        return this.reflectionCapabilities.propMetadata(typeOrFunc);
    }
    /**
     * @param {?} type
     * @param {?} lcProperty
     * @return {?}
     */
    hasLifecycleHook(type, lcProperty) {
        return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    guards(type) { return this.reflectionCapabilities.guards(type); }
    /**
     * @param {?} ref
     * @return {?}
     */
    resolveExternalReference(ref) {
        return builtinExternalReferences.get(ref) || ref.runtime;
    }
}
/**
 * @return {?}
 */
function createBuiltinExternalReferencesMap() {
    /** @type {?} */
    const map = new Map();
    map.set(Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS, ANALYZE_FOR_ENTRY_COMPONENTS);
    map.set(Identifiers.ElementRef, ElementRef);
    map.set(Identifiers.NgModuleRef, NgModuleRef);
    map.set(Identifiers.ViewContainerRef, ViewContainerRef);
    map.set(Identifiers.ChangeDetectorRef, ChangeDetectorRef);
    map.set(Identifiers.Renderer2, Renderer2);
    map.set(Identifiers.QueryList, QueryList);
    map.set(Identifiers.TemplateRef, TemplateRef);
    map.set(Identifiers.CodegenComponentFactoryResolver, ɵCodegenComponentFactoryResolver);
    map.set(Identifiers.ComponentFactoryResolver, ComponentFactoryResolver);
    map.set(Identifiers.ComponentFactory, ComponentFactory);
    map.set(Identifiers.ComponentRef, ComponentRef);
    map.set(Identifiers.NgModuleFactory, NgModuleFactory);
    map.set(Identifiers.createModuleFactory, ɵcmf);
    map.set(Identifiers.moduleDef, ɵmod);
    map.set(Identifiers.moduleProviderDef, ɵmpd);
    map.set(Identifiers.RegisterModuleFactoryFn, ɵregisterModuleFactory);
    map.set(Identifiers.Injector, Injector);
    map.set(Identifiers.ViewEncapsulation, ViewEncapsulation);
    map.set(Identifiers.ChangeDetectionStrategy, ChangeDetectionStrategy);
    map.set(Identifiers.SecurityContext, SecurityContext);
    map.set(Identifiers.LOCALE_ID, LOCALE_ID);
    map.set(Identifiers.TRANSLATIONS_FORMAT, TRANSLATIONS_FORMAT);
    map.set(Identifiers.inlineInterpolate, ɵinlineInterpolate);
    map.set(Identifiers.interpolate, ɵinterpolate);
    map.set(Identifiers.EMPTY_ARRAY, ɵEMPTY_ARRAY);
    map.set(Identifiers.EMPTY_MAP, ɵEMPTY_MAP);
    map.set(Identifiers.Renderer, Renderer);
    map.set(Identifiers.viewDef, ɵvid);
    map.set(Identifiers.elementDef, ɵeld);
    map.set(Identifiers.anchorDef, ɵand);
    map.set(Identifiers.textDef, ɵted);
    map.set(Identifiers.directiveDef, ɵdid);
    map.set(Identifiers.providerDef, ɵprd);
    map.set(Identifiers.queryDef, ɵqud);
    map.set(Identifiers.pureArrayDef, ɵpad);
    map.set(Identifiers.pureObjectDef, ɵpod);
    map.set(Identifiers.purePipeDef, ɵppd);
    map.set(Identifiers.pipeDef, ɵpid);
    map.set(Identifiers.nodeValue, ɵnov);
    map.set(Identifiers.ngContentDef, ɵncd);
    map.set(Identifiers.unwrapValue, ɵunv);
    map.set(Identifiers.createRendererType2, ɵcrt);
    map.set(Identifiers.createComponentFactory, ɵccf);
    return map;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const ERROR_COLLECTOR_TOKEN = new InjectionToken('ErrorCollector');
/** *
 * A default provider for {\@link PACKAGE_ROOT_URL} that maps to '/'.
  @type {?} */
const DEFAULT_PACKAGE_URL_PROVIDER = {
    provide: PACKAGE_ROOT_URL,
    useValue: '/'
};
/** @type {?} */
const _NO_RESOURCE_LOADER = {
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        throw new Error(`No ResourceLoader implementation has been provided. Can't read the url "${url}"`);
    }
};
/** @type {?} */
const baseHtmlParser = new InjectionToken('HtmlParser');
class CompilerImpl {
    /**
     * @param {?} injector
     * @param {?} _metadataResolver
     * @param {?} templateParser
     * @param {?} styleCompiler
     * @param {?} viewCompiler
     * @param {?} ngModuleCompiler
     * @param {?} summaryResolver
     * @param {?} compileReflector
     * @param {?} compilerConfig
     * @param {?} console
     */
    constructor(injector, _metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, compilerConfig, console) {
        this._metadataResolver = _metadataResolver;
        this._delegate = new JitCompiler(_metadataResolver, templateParser, styleCompiler, viewCompiler, ngModuleCompiler, summaryResolver, compileReflector, compilerConfig, console, this.getExtraNgModuleProviders.bind(this));
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    getExtraNgModuleProviders() {
        return [this._metadataResolver.getProviderMetadata(new ProviderMeta(Compiler, { useValue: this }))];
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleSync(moduleType) {
        return /** @type {?} */ (this._delegate.compileModuleSync(moduleType));
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAsync(moduleType) {
        return /** @type {?} */ (this._delegate.compileModuleAsync(moduleType));
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsSync(moduleType) {
        /** @type {?} */
        const result = this._delegate.compileModuleAndAllComponentsSync(moduleType);
        return {
            ngModuleFactory: /** @type {?} */ (result.ngModuleFactory),
            componentFactories: /** @type {?} */ (result.componentFactories),
        };
    }
    /**
     * @template T
     * @param {?} moduleType
     * @return {?}
     */
    compileModuleAndAllComponentsAsync(moduleType) {
        return this._delegate.compileModuleAndAllComponentsAsync(moduleType)
            .then((result) => ({
            ngModuleFactory: /** @type {?} */ (result.ngModuleFactory),
            componentFactories: /** @type {?} */ (result.componentFactories),
        }));
    }
    /**
     * @param {?} summaries
     * @return {?}
     */
    loadAotSummaries(summaries) { this._delegate.loadAotSummaries(summaries); }
    /**
     * @param {?} ref
     * @return {?}
     */
    hasAotSummary(ref) { return this._delegate.hasAotSummary(ref); }
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    getComponentFactory(component) {
        return /** @type {?} */ (this._delegate.getComponentFactory(component));
    }
    /**
     * @return {?}
     */
    clearCache() { this._delegate.clearCache(); }
    /**
     * @param {?} type
     * @return {?}
     */
    clearCacheFor(type) { this._delegate.clearCacheFor(type); }
    /**
     * @param {?} moduleType
     * @return {?}
     */
    getModuleId(moduleType) {
        /** @type {?} */
        const meta = this._metadataResolver.getNgModuleMetadata(moduleType);
        return meta && meta.id || undefined;
    }
}
/** *
 * A set of providers that provide `JitCompiler` and its dependencies to use for
 * template compilation.
  @type {?} */
const COMPILER_PROVIDERS = /** @type {?} */ ([
    { provide: CompileReflector, useValue: new JitReflector() },
    { provide: ResourceLoader, useValue: _NO_RESOURCE_LOADER },
    { provide: JitSummaryResolver, deps: [] },
    { provide: SummaryResolver, useExisting: JitSummaryResolver },
    { provide: ɵConsole, deps: [] },
    { provide: Lexer, deps: [] },
    { provide: Parser, deps: [Lexer] },
    {
        provide: baseHtmlParser,
        useClass: HtmlParser,
        deps: [],
    },
    {
        provide: I18NHtmlParser,
        useFactory: (parser, translations, format, config, console) => {
            translations = translations || '';
            /** @type {?} */
            const missingTranslation = translations ? /** @type {?} */ ((config.missingTranslation)) : MissingTranslationStrategy.Ignore;
            return new I18NHtmlParser(parser, translations, format, missingTranslation, console);
        },
        deps: [
            baseHtmlParser,
            [new Optional(), new Inject(TRANSLATIONS)],
            [new Optional(), new Inject(TRANSLATIONS_FORMAT)],
            [CompilerConfig],
            [ɵConsole],
        ]
    },
    {
        provide: HtmlParser,
        useExisting: I18NHtmlParser,
    },
    {
        provide: TemplateParser, deps: [CompilerConfig, CompileReflector,
            Parser, ElementSchemaRegistry,
            I18NHtmlParser, ɵConsole]
    },
    { provide: DirectiveNormalizer, deps: [ResourceLoader, UrlResolver, HtmlParser, CompilerConfig] },
    { provide: CompileMetadataResolver, deps: [CompilerConfig, HtmlParser, NgModuleResolver,
            DirectiveResolver, PipeResolver,
            SummaryResolver,
            ElementSchemaRegistry,
            DirectiveNormalizer, ɵConsole,
            [Optional, StaticSymbolCache],
            CompileReflector,
            [Optional, ERROR_COLLECTOR_TOKEN]] },
    DEFAULT_PACKAGE_URL_PROVIDER,
    { provide: StyleCompiler, deps: [UrlResolver] },
    { provide: ViewCompiler, deps: [CompileReflector] },
    { provide: NgModuleCompiler, deps: [CompileReflector] },
    { provide: CompilerConfig, useValue: new CompilerConfig() },
    { provide: Compiler, useClass: CompilerImpl, deps: [Injector, CompileMetadataResolver,
            TemplateParser, StyleCompiler,
            ViewCompiler, NgModuleCompiler,
            SummaryResolver, CompileReflector, CompilerConfig,
            ɵConsole] },
    { provide: DomElementSchemaRegistry, deps: [] },
    { provide: ElementSchemaRegistry, useExisting: DomElementSchemaRegistry },
    { provide: UrlResolver, deps: [PACKAGE_ROOT_URL] },
    { provide: DirectiveResolver, deps: [CompileReflector] },
    { provide: PipeResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, deps: [CompileReflector] },
]);
/**
 * \@publicApi
 */
class JitCompilerFactory {
    /**
     * @param {?} defaultOptions
     */
    constructor(defaultOptions) {
        /** @type {?} */
        const compilerOptions = {
            useJit: true,
            defaultEncapsulation: ViewEncapsulation.Emulated,
            missingTranslation: MissingTranslationStrategy.Warning,
        };
        this._defaultOptions = [compilerOptions, ...defaultOptions];
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createCompiler(options = []) {
        /** @type {?} */
        const opts = _mergeOptions(this._defaultOptions.concat(options));
        /** @type {?} */
        const injector = Injector.create([
            COMPILER_PROVIDERS, {
                provide: CompilerConfig,
                useFactory: () => {
                    return new CompilerConfig({
                        // let explicit values from the compiler options overwrite options
                        // from the app providers
                        useJit: opts.useJit,
                        jitDevMode: isDevMode(),
                        // let explicit values from the compiler options overwrite options
                        // from the app providers
                        defaultEncapsulation: opts.defaultEncapsulation,
                        missingTranslation: opts.missingTranslation,
                        preserveWhitespaces: opts.preserveWhitespaces,
                    });
                },
                deps: []
            },
            /** @type {?} */ ((opts.providers))
        ]);
        return injector.get(Compiler);
    }
}
/**
 * @param {?} optionsArr
 * @return {?}
 */
function _mergeOptions(optionsArr) {
    return {
        useJit: _lastDefined(optionsArr.map(options => options.useJit)),
        defaultEncapsulation: _lastDefined(optionsArr.map(options => options.defaultEncapsulation)),
        providers: _mergeArrays(optionsArr.map(options => /** @type {?} */ ((options.providers)))),
        missingTranslation: _lastDefined(optionsArr.map(options => options.missingTranslation)),
        preserveWhitespaces: _lastDefined(optionsArr.map(options => options.preserveWhitespaces)),
    };
}
/**
 * @template T
 * @param {?} args
 * @return {?}
 */
function _lastDefined(args) {
    for (let i = args.length - 1; i >= 0; i--) {
        if (args[i] !== undefined) {
            return args[i];
        }
    }
    return undefined;
}
/**
 * @param {?} parts
 * @return {?}
 */
function _mergeArrays(parts) {
    /** @type {?} */
    const result = [];
    parts.forEach((part) => part && result.push(...part));
    return result;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * A platform that included corePlatform and the compiler.
 *
 * \@publicApi
  @type {?} */
const platformCoreDynamic = createPlatformFactory(platformCore, 'coreDynamic', [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ResourceLoaderImpl extends ResourceLoader {
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        /** @type {?} */
        let resolve;
        /** @type {?} */
        let reject;
        /** @type {?} */
        const promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        /** @type {?} */
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'text';
        xhr.onload = function () {
            /** @type {?} */
            const response = xhr.response || xhr.responseText;
            /** @type {?} */
            let status = xhr.status === 1223 ? 204 : xhr.status;
            // fix status code when it is 0 (0 status is undocumented).
            // Occurs when accessing file resources or on Android 4.1 stock browser
            // while retrieving files from application cache.
            if (status === 0) {
                status = response ? 200 : 0;
            }
            if (200 <= status && status <= 300) {
                resolve(response);
            }
            else {
                reject(`Failed to load ${url}`);
            }
        };
        xhr.onerror = function () { reject(`Failed to load ${url}`); };
        xhr.send();
        return promise;
    }
}
ResourceLoaderImpl.decorators = [
    { type: Injectable },
];
ResourceLoaderImpl.ngInjectableDef = defineInjectable({ token: ResourceLoaderImpl, factory: function ResourceLoaderImpl_Factory(t) { return ɵResourceLoaderImpl_BaseFactory((t || ResourceLoaderImpl)); }, providedIn: null });
const ɵResourceLoaderImpl_BaseFactory = ɵgetInheritedFactory(ResourceLoaderImpl);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * \@publicApi
  @type {?} */
const INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [
    ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS,
    {
        provide: COMPILER_OPTIONS,
        useValue: { providers: [{ provide: ResourceLoader, useClass: ResourceLoaderImpl, deps: [] }] },
        multi: true
    },
    { provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * An implementation of ResourceLoader that uses a template cache to avoid doing an actual
 * ResourceLoader.
 *
 * The template cache needs to be built and loaded into window.$templateCache
 * via a separate mechanism.
 *
 * \@publicApi
 */
class CachedResourceLoader extends ResourceLoader {
    constructor() {
        super();
        this._cache = (/** @type {?} */ (ɵglobal)).$templateCache;
        if (this._cache == null) {
            throw new Error('CachedResourceLoader: Template cache was not found in $templateCache.');
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        if (this._cache.hasOwnProperty(url)) {
            return Promise.resolve(this._cache[url]);
        }
        else {
            return /** @type {?} */ (Promise.reject('CachedResourceLoader: Did not find cached template for ' + url));
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * \@publicApi
  @type {?} */
const VERSION = new Version('7.1.0-beta.0+73.sha-62b4ff52');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * \@publicApi
  @type {?} */
const RESOURCE_CACHE_PROVIDER = [{ provide: ResourceLoader, useClass: CachedResourceLoader, deps: [] }];
/** *
 * \@publicApi
  @type {?} */
const platformBrowserDynamic = createPlatformFactory(platformCoreDynamic, 'browserDynamic', INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { VERSION, JitCompilerFactory, RESOURCE_CACHE_PROVIDER, platformBrowserDynamic, CompilerImpl as ɵCompilerImpl, platformCoreDynamic as ɵplatformCoreDynamic, INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS as ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, ResourceLoaderImpl as ɵResourceLoaderImpl };
//# sourceMappingURL=platform-browser-dynamic.js.map
