/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Compiler, Inject, InjectionToken, Optional, PACKAGE_ROOT_URL, TRANSLATIONS, isDevMode, ɵConsole as Console, ViewEncapsulation, Injector, TRANSLATIONS_FORMAT, MissingTranslationStrategy, } from '@angular/core';
import { StaticSymbolCache, JitCompiler, ProviderMeta, I18NHtmlParser, ViewCompiler, CompileMetadataResolver, UrlResolver, TemplateParser, NgModuleCompiler, JitSummaryResolver, SummaryResolver, StyleCompiler, PipeResolver, ElementSchemaRegistry, DomElementSchemaRegistry, ResourceLoader, NgModuleResolver, HtmlParser, CompileReflector, CompilerConfig, DirectiveNormalizer, DirectiveResolver, Lexer, Parser } from '@angular/compiler';
import { JitReflector } from './compiler_reflector';
export const /** @type {?} */ ERROR_COLLECTOR_TOKEN = new InjectionToken('ErrorCollector');
/**
 * A default provider for {\@link PACKAGE_ROOT_URL} that maps to '/'.
 */
export const /** @type {?} */ DEFAULT_PACKAGE_URL_PROVIDER = {
    provide: PACKAGE_ROOT_URL,
    useValue: '/'
};
const /** @type {?} */ _NO_RESOURCE_LOADER = {
    /**
     * @param {?} url
     * @return {?}
     */
    get(url) {
        throw new Error(`No ResourceLoader implementation has been provided. Can't read the url "${url}"`);
    }
};
const /** @type {?} */ baseHtmlParser = new InjectionToken('HtmlParser');
export class CompilerImpl {
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
        const /** @type {?} */ result = this._delegate.compileModuleAndAllComponentsSync(moduleType);
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
}
function CompilerImpl_tsickle_Closure_declarations() {
    /** @type {?} */
    CompilerImpl.prototype._delegate;
    /** @type {?} */
    CompilerImpl.prototype.injector;
    /** @type {?} */
    CompilerImpl.prototype._metadataResolver;
}
/**
 * A set of providers that provide `JitCompiler` and its dependencies to use for
 * template compilation.
 */
export const /** @type {?} */ COMPILER_PROVIDERS = /** @type {?} */ ([
    { provide: CompileReflector, useValue: new JitReflector() },
    { provide: ResourceLoader, useValue: _NO_RESOURCE_LOADER },
    { provide: JitSummaryResolver, deps: [] },
    { provide: SummaryResolver, useExisting: JitSummaryResolver },
    { provide: Console, deps: [] },
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
            const /** @type {?} */ missingTranslation = translations ? /** @type {?} */ ((config.missingTranslation)) : MissingTranslationStrategy.Ignore;
            return new I18NHtmlParser(parser, translations, format, missingTranslation, console);
        },
        deps: [
            baseHtmlParser,
            [new Optional(), new Inject(TRANSLATIONS)],
            [new Optional(), new Inject(TRANSLATIONS_FORMAT)],
            [CompilerConfig],
            [Console],
        ]
    },
    {
        provide: HtmlParser,
        useExisting: I18NHtmlParser,
    },
    {
        provide: TemplateParser, deps: [CompilerConfig, CompileReflector,
            Parser, ElementSchemaRegistry,
            I18NHtmlParser, Console]
    },
    { provide: DirectiveNormalizer, deps: [ResourceLoader, UrlResolver, HtmlParser, CompilerConfig] },
    { provide: CompileMetadataResolver, deps: [CompilerConfig, HtmlParser, NgModuleResolver,
            DirectiveResolver, PipeResolver,
            SummaryResolver,
            ElementSchemaRegistry,
            DirectiveNormalizer, Console,
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
            Console] },
    { provide: DomElementSchemaRegistry, deps: [] },
    { provide: ElementSchemaRegistry, useExisting: DomElementSchemaRegistry },
    { provide: UrlResolver, deps: [PACKAGE_ROOT_URL] },
    { provide: DirectiveResolver, deps: [CompileReflector] },
    { provide: PipeResolver, deps: [CompileReflector] },
    { provide: NgModuleResolver, deps: [CompileReflector] },
]);
/**
 * \@experimental
 */
export class JitCompilerFactory {
    /**
     * @param {?} defaultOptions
     */
    constructor(defaultOptions) {
        const /** @type {?} */ compilerOptions = {
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
        const /** @type {?} */ opts = _mergeOptions(this._defaultOptions.concat(options));
        const /** @type {?} */ injector = Injector.create([
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
function JitCompilerFactory_tsickle_Closure_declarations() {
    /** @type {?} */
    JitCompilerFactory.prototype._defaultOptions;
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
    for (let /** @type {?} */ i = args.length - 1; i >= 0; i--) {
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
    const /** @type {?} */ result = [];
    parts.forEach((part) => part && result.push(...part));
    return result;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9zcmMvY29tcGlsZXJfZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQW9GLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUErQixZQUFZLEVBQVEsU0FBUyxFQUFnQixRQUFRLElBQUksT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBbUIsbUJBQW1CLEVBQUUsMEJBQTBCLEdBQUUsTUFBTSxlQUFlLENBQUM7QUFFNVcsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQXFCLGNBQWMsRUFBZSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFL2MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE1BQU0sQ0FBQyx1QkFBTSxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzs7O0FBSzFFLE1BQU0sQ0FBQyx1QkFBTSw0QkFBNEIsR0FBRztJQUMxQyxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQztBQUVGLHVCQUFNLG1CQUFtQixHQUFtQjs7Ozs7SUFDMUMsR0FBRyxDQUFDLEdBQVc7UUFD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RyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3pDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtLQUNGO0lBQ0QsT0FBTyxTQUFTLENBQUM7Q0FDbEI7Ozs7O0FBRUQsc0JBQXNCLEtBQWM7SUFDbEMsdUJBQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztJQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsT0FBTyxNQUFNLENBQUM7Q0FDZiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlciwgQ29tcGlsZXJGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5LCBDb21waWxlck9wdGlvbnMsIE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXMsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBQQUNLQUdFX1JPT1RfVVJMLCBQbGF0Zm9ybVJlZiwgU3RhdGljUHJvdmlkZXIsIFRSQU5TTEFUSU9OUywgVHlwZSwgaXNEZXZNb2RlLCBwbGF0Zm9ybUNvcmUsIMm1Q29uc29sZSBhcyBDb25zb2xlLCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5qZWN0b3IsIE5nTW9kdWxlRmFjdG9yeSwgVFJBTlNMQVRJT05TX0ZPUk1BVCwgTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3ksfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtTdGF0aWNTeW1ib2xDYWNoZSwgSml0Q29tcGlsZXIsIFByb3ZpZGVyTWV0YSwgRXh0ZXJuYWxSZWZlcmVuY2UsIEkxOE5IdG1sUGFyc2VyLCBJZGVudGlmaWVycywgVmlld0NvbXBpbGVyLCBDb21waWxlTWV0YWRhdGFSZXNvbHZlciwgVXJsUmVzb2x2ZXIsIFRlbXBsYXRlUGFyc2VyLCBOZ01vZHVsZUNvbXBpbGVyLCBKaXRTdW1tYXJ5UmVzb2x2ZXIsIFN1bW1hcnlSZXNvbHZlciwgU3R5bGVDb21waWxlciwgUGlwZVJlc29sdmVyLCBFbGVtZW50U2NoZW1hUmVnaXN0cnksIERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSwgUmVzb3VyY2VMb2FkZXIsIE5nTW9kdWxlUmVzb2x2ZXIsIEh0bWxQYXJzZXIsIENvbXBpbGVSZWZsZWN0b3IsIENvbXBpbGVyQ29uZmlnLCBEaXJlY3RpdmVOb3JtYWxpemVyLCBEaXJlY3RpdmVSZXNvbHZlciwgTGV4ZXIsIFBhcnNlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5pbXBvcnQge0ppdFJlZmxlY3Rvcn0gZnJvbSAnLi9jb21waWxlcl9yZWZsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgRVJST1JfQ09MTEVDVE9SX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuKCdFcnJvckNvbGxlY3RvcicpO1xuXG4vKipcbiAqIEEgZGVmYXVsdCBwcm92aWRlciBmb3Ige0BsaW5rIFBBQ0tBR0VfUk9PVF9VUkx9IHRoYXQgbWFwcyB0byAnLycuXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BBQ0tBR0VfVVJMX1BST1ZJREVSID0ge1xuICBwcm92aWRlOiBQQUNLQUdFX1JPT1RfVVJMLFxuICB1c2VWYWx1ZTogJy8nXG59O1xuXG5jb25zdCBfTk9fUkVTT1VSQ0VfTE9BREVSOiBSZXNvdXJjZUxvYWRlciA9IHtcbiAgZ2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+e1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBObyBSZXNvdXJjZUxvYWRlciBpbXBsZW1lbnRhdGlvbiBoYXMgYmVlbiBwcm92aWRlZC4gQ2FuJ3QgcmVhZCB0aGUgdXJsIFwiJHt1cmx9XCJgKTt9XG59O1xuXG5jb25zdCBiYXNlSHRtbFBhcnNlciA9IG5ldyBJbmplY3Rpb25Ub2tlbignSHRtbFBhcnNlcicpO1xuXG5leHBvcnQgY2xhc3MgQ29tcGlsZXJJbXBsIGltcGxlbWVudHMgQ29tcGlsZXIge1xuICBwcml2YXRlIF9kZWxlZ2F0ZTogSml0Q29tcGlsZXI7XG4gIHB1YmxpYyByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3I7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIF9tZXRhZGF0YVJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlcixcbiAgICAgIHRlbXBsYXRlUGFyc2VyOiBUZW1wbGF0ZVBhcnNlciwgc3R5bGVDb21waWxlcjogU3R5bGVDb21waWxlciwgdmlld0NvbXBpbGVyOiBWaWV3Q29tcGlsZXIsXG4gICAgICBuZ01vZHVsZUNvbXBpbGVyOiBOZ01vZHVsZUNvbXBpbGVyLCBzdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxUeXBlPGFueT4+LFxuICAgICAgY29tcGlsZVJlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3RvciwgY29tcGlsZXJDb25maWc6IENvbXBpbGVyQ29uZmlnLCBjb25zb2xlOiBDb25zb2xlKSB7XG4gICAgdGhpcy5fZGVsZWdhdGUgPSBuZXcgSml0Q29tcGlsZXIoXG4gICAgICAgIF9tZXRhZGF0YVJlc29sdmVyLCB0ZW1wbGF0ZVBhcnNlciwgc3R5bGVDb21waWxlciwgdmlld0NvbXBpbGVyLCBuZ01vZHVsZUNvbXBpbGVyLFxuICAgICAgICBzdW1tYXJ5UmVzb2x2ZXIsIGNvbXBpbGVSZWZsZWN0b3IsIGNvbXBpbGVyQ29uZmlnLCBjb25zb2xlLFxuICAgICAgICB0aGlzLmdldEV4dHJhTmdNb2R1bGVQcm92aWRlcnMuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5pbmplY3RvciA9IGluamVjdG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFeHRyYU5nTW9kdWxlUHJvdmlkZXJzKCkge1xuICAgIHJldHVybiBbdGhpcy5fbWV0YWRhdGFSZXNvbHZlci5nZXRQcm92aWRlck1ldGFkYXRhKFxuICAgICAgICBuZXcgUHJvdmlkZXJNZXRhKENvbXBpbGVyLCB7dXNlVmFsdWU6IHRoaXN9KSldO1xuICB9XG5cbiAgY29tcGlsZU1vZHVsZVN5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IE5nTW9kdWxlRmFjdG9yeTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNvbXBpbGVNb2R1bGVTeW5jKG1vZHVsZVR5cGUpIGFzIE5nTW9kdWxlRmFjdG9yeTxUPjtcbiAgfVxuICBjb21waWxlTW9kdWxlQXN5bmM8VD4obW9kdWxlVHlwZTogVHlwZTxUPik6IFByb21pc2U8TmdNb2R1bGVGYWN0b3J5PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNvbXBpbGVNb2R1bGVBc3luYyhtb2R1bGVUeXBlKSBhcyBQcm9taXNlPE5nTW9kdWxlRmFjdG9yeTxUPj47XG4gIH1cbiAgY29tcGlsZU1vZHVsZUFuZEFsbENvbXBvbmVudHNTeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOiBNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kZWxlZ2F0ZS5jb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c1N5bmMobW9kdWxlVHlwZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlRmFjdG9yeTogcmVzdWx0Lm5nTW9kdWxlRmFjdG9yeSBhcyBOZ01vZHVsZUZhY3Rvcnk8VD4sXG4gICAgICBjb21wb25lbnRGYWN0b3JpZXM6IHJlc3VsdC5jb21wb25lbnRGYWN0b3JpZXMgYXMgQ29tcG9uZW50RmFjdG9yeTxhbnk+W10sXG4gICAgfTtcbiAgfVxuICBjb21waWxlTW9kdWxlQW5kQWxsQ29tcG9uZW50c0FzeW5jPFQ+KG1vZHVsZVR5cGU6IFR5cGU8VD4pOlxuICAgICAgUHJvbWlzZTxNb2R1bGVXaXRoQ29tcG9uZW50RmFjdG9yaWVzPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmMobW9kdWxlVHlwZSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gKHtcbiAgICAgICAgICAgICAgICBuZ01vZHVsZUZhY3Rvcnk6IHJlc3VsdC5uZ01vZHVsZUZhY3RvcnkgYXMgTmdNb2R1bGVGYWN0b3J5PFQ+LFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEZhY3RvcmllczogcmVzdWx0LmNvbXBvbmVudEZhY3RvcmllcyBhcyBDb21wb25lbnRGYWN0b3J5PGFueT5bXSxcbiAgICAgICAgICAgICAgfSkpO1xuICB9XG4gIGxvYWRBb3RTdW1tYXJpZXMoc3VtbWFyaWVzOiAoKSA9PiBhbnlbXSkgeyB0aGlzLl9kZWxlZ2F0ZS5sb2FkQW90U3VtbWFyaWVzKHN1bW1hcmllcyk7IH1cbiAgaGFzQW90U3VtbWFyeShyZWY6IFR5cGU8YW55Pik6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaGFzQW90U3VtbWFyeShyZWYpOyB9XG4gIGdldENvbXBvbmVudEZhY3Rvcnk8VD4oY29tcG9uZW50OiBUeXBlPFQ+KTogQ29tcG9uZW50RmFjdG9yeTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldENvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KSBhcyBDb21wb25lbnRGYWN0b3J5PFQ+O1xuICB9XG4gIGNsZWFyQ2FjaGUoKTogdm9pZCB7IHRoaXMuX2RlbGVnYXRlLmNsZWFyQ2FjaGUoKTsgfVxuICBjbGVhckNhY2hlRm9yKHR5cGU6IFR5cGU8YW55PikgeyB0aGlzLl9kZWxlZ2F0ZS5jbGVhckNhY2hlRm9yKHR5cGUpOyB9XG59XG5cbi8qKlxuICogQSBzZXQgb2YgcHJvdmlkZXJzIHRoYXQgcHJvdmlkZSBgSml0Q29tcGlsZXJgIGFuZCBpdHMgZGVwZW5kZW5jaWVzIHRvIHVzZSBmb3JcbiAqIHRlbXBsYXRlIGNvbXBpbGF0aW9uLlxuICovXG5leHBvcnQgY29uc3QgQ09NUElMRVJfUFJPVklERVJTID0gPFN0YXRpY1Byb3ZpZGVyW10+W1xuICB7cHJvdmlkZTogQ29tcGlsZVJlZmxlY3RvciwgdXNlVmFsdWU6IG5ldyBKaXRSZWZsZWN0b3IoKX0sXG4gIHtwcm92aWRlOiBSZXNvdXJjZUxvYWRlciwgdXNlVmFsdWU6IF9OT19SRVNPVVJDRV9MT0FERVJ9LFxuICB7cHJvdmlkZTogSml0U3VtbWFyeVJlc29sdmVyLCBkZXBzOiBbXX0sXG4gIHtwcm92aWRlOiBTdW1tYXJ5UmVzb2x2ZXIsIHVzZUV4aXN0aW5nOiBKaXRTdW1tYXJ5UmVzb2x2ZXJ9LFxuICB7cHJvdmlkZTogQ29uc29sZSwgZGVwczogW119LFxuICB7cHJvdmlkZTogTGV4ZXIsIGRlcHM6IFtdfSxcbiAge3Byb3ZpZGU6IFBhcnNlciwgZGVwczogW0xleGVyXX0sXG4gIHtcbiAgICBwcm92aWRlOiBiYXNlSHRtbFBhcnNlcixcbiAgICB1c2VDbGFzczogSHRtbFBhcnNlcixcbiAgICBkZXBzOiBbXSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEkxOE5IdG1sUGFyc2VyLFxuICAgIHVzZUZhY3Rvcnk6IChwYXJzZXI6IEh0bWxQYXJzZXIsIHRyYW5zbGF0aW9uczogc3RyaW5nIHwgbnVsbCwgZm9ybWF0OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgIGNvbmZpZzogQ29tcGlsZXJDb25maWcsIGNvbnNvbGU6IENvbnNvbGUpID0+IHtcbiAgICAgIHRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucyB8fCAnJztcbiAgICAgIGNvbnN0IG1pc3NpbmdUcmFuc2xhdGlvbiA9XG4gICAgICAgICAgdHJhbnNsYXRpb25zID8gY29uZmlnLm1pc3NpbmdUcmFuc2xhdGlvbiAhIDogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuSWdub3JlO1xuICAgICAgcmV0dXJuIG5ldyBJMThOSHRtbFBhcnNlcihwYXJzZXIsIHRyYW5zbGF0aW9ucywgZm9ybWF0LCBtaXNzaW5nVHJhbnNsYXRpb24sIGNvbnNvbGUpO1xuICAgIH0sXG4gICAgZGVwczogW1xuICAgICAgYmFzZUh0bWxQYXJzZXIsXG4gICAgICBbbmV3IE9wdGlvbmFsKCksIG5ldyBJbmplY3QoVFJBTlNMQVRJT05TKV0sXG4gICAgICBbbmV3IE9wdGlvbmFsKCksIG5ldyBJbmplY3QoVFJBTlNMQVRJT05TX0ZPUk1BVCldLFxuICAgICAgW0NvbXBpbGVyQ29uZmlnXSxcbiAgICAgIFtDb25zb2xlXSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdG1sUGFyc2VyLFxuICAgIHVzZUV4aXN0aW5nOiBJMThOSHRtbFBhcnNlcixcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFRlbXBsYXRlUGFyc2VyLCBkZXBzOiBbQ29tcGlsZXJDb25maWcsIENvbXBpbGVSZWZsZWN0b3IsXG4gICAgUGFyc2VyLCBFbGVtZW50U2NoZW1hUmVnaXN0cnksXG4gICAgSTE4Tkh0bWxQYXJzZXIsIENvbnNvbGVdXG4gIH0sXG4gIHsgcHJvdmlkZTogRGlyZWN0aXZlTm9ybWFsaXplciwgZGVwczogW1Jlc291cmNlTG9hZGVyLCBVcmxSZXNvbHZlciwgSHRtbFBhcnNlciwgQ29tcGlsZXJDb25maWddfSxcbiAgeyBwcm92aWRlOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlciwgZGVwczogW0NvbXBpbGVyQ29uZmlnLCBIdG1sUGFyc2VyLCBOZ01vZHVsZVJlc29sdmVyLFxuICAgICAgICAgICAgICAgICAgICAgIERpcmVjdGl2ZVJlc29sdmVyLCBQaXBlUmVzb2x2ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgU3VtbWFyeVJlc29sdmVyLFxuICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnRTY2hlbWFSZWdpc3RyeSxcbiAgICAgICAgICAgICAgICAgICAgICBEaXJlY3RpdmVOb3JtYWxpemVyLCBDb25zb2xlLFxuICAgICAgICAgICAgICAgICAgICAgIFtPcHRpb25hbCwgU3RhdGljU3ltYm9sQ2FjaGVdLFxuICAgICAgICAgICAgICAgICAgICAgIENvbXBpbGVSZWZsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgW09wdGlvbmFsLCBFUlJPUl9DT0xMRUNUT1JfVE9LRU5dXX0sXG4gIERFRkFVTFRfUEFDS0FHRV9VUkxfUFJPVklERVIsXG4gIHsgcHJvdmlkZTogU3R5bGVDb21waWxlciwgZGVwczogW1VybFJlc29sdmVyXX0sXG4gIHsgcHJvdmlkZTogVmlld0NvbXBpbGVyLCBkZXBzOiBbQ29tcGlsZVJlZmxlY3Rvcl19LFxuICB7IHByb3ZpZGU6IE5nTW9kdWxlQ29tcGlsZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXSB9LFxuICB7IHByb3ZpZGU6IENvbXBpbGVyQ29uZmlnLCB1c2VWYWx1ZTogbmV3IENvbXBpbGVyQ29uZmlnKCl9LFxuICB7IHByb3ZpZGU6IENvbXBpbGVyLCB1c2VDbGFzczogQ29tcGlsZXJJbXBsLCBkZXBzOiBbSW5qZWN0b3IsIENvbXBpbGVNZXRhZGF0YVJlc29sdmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW1wbGF0ZVBhcnNlciwgU3R5bGVDb21waWxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlld0NvbXBpbGVyLCBOZ01vZHVsZUNvbXBpbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdW1tYXJ5UmVzb2x2ZXIsIENvbXBpbGVSZWZsZWN0b3IsIENvbXBpbGVyQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25zb2xlXX0sXG4gIHsgcHJvdmlkZTogRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCBkZXBzOiBbXX0sXG4gIHsgcHJvdmlkZTogRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LCB1c2VFeGlzdGluZzogRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5fSxcbiAgeyBwcm92aWRlOiBVcmxSZXNvbHZlciwgZGVwczogW1BBQ0tBR0VfUk9PVF9VUkxdfSxcbiAgeyBwcm92aWRlOiBEaXJlY3RpdmVSZXNvbHZlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbiAgeyBwcm92aWRlOiBQaXBlUmVzb2x2ZXIsIGRlcHM6IFtDb21waWxlUmVmbGVjdG9yXX0sXG4gIHsgcHJvdmlkZTogTmdNb2R1bGVSZXNvbHZlciwgZGVwczogW0NvbXBpbGVSZWZsZWN0b3JdfSxcbl07XG5cbi8qKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgSml0Q29tcGlsZXJGYWN0b3J5IGltcGxlbWVudHMgQ29tcGlsZXJGYWN0b3J5IHtcbiAgcHJpdmF0ZSBfZGVmYXVsdE9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1tdO1xuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0T3B0aW9uczogQ29tcGlsZXJPcHRpb25zW10pIHtcbiAgICBjb25zdCBjb21waWxlck9wdGlvbnM6IENvbXBpbGVyT3B0aW9ucyA9IHtcbiAgICAgIHVzZUppdDogdHJ1ZSxcbiAgICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbiAgICAgIG1pc3NpbmdUcmFuc2xhdGlvbjogTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kuV2FybmluZyxcbiAgICB9O1xuXG4gICAgdGhpcy5fZGVmYXVsdE9wdGlvbnMgPSBbY29tcGlsZXJPcHRpb25zLCAuLi5kZWZhdWx0T3B0aW9uc107XG4gIH1cbiAgY3JlYXRlQ29tcGlsZXIob3B0aW9uczogQ29tcGlsZXJPcHRpb25zW10gPSBbXSk6IENvbXBpbGVyIHtcbiAgICBjb25zdCBvcHRzID0gX21lcmdlT3B0aW9ucyh0aGlzLl9kZWZhdWx0T3B0aW9ucy5jb25jYXQob3B0aW9ucykpO1xuICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgIENPTVBJTEVSX1BST1ZJREVSUywge1xuICAgICAgICBwcm92aWRlOiBDb21waWxlckNvbmZpZyxcbiAgICAgICAgdXNlRmFjdG9yeTogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgQ29tcGlsZXJDb25maWcoe1xuICAgICAgICAgICAgLy8gbGV0IGV4cGxpY2l0IHZhbHVlcyBmcm9tIHRoZSBjb21waWxlciBvcHRpb25zIG92ZXJ3cml0ZSBvcHRpb25zXG4gICAgICAgICAgICAvLyBmcm9tIHRoZSBhcHAgcHJvdmlkZXJzXG4gICAgICAgICAgICB1c2VKaXQ6IG9wdHMudXNlSml0LFxuICAgICAgICAgICAgaml0RGV2TW9kZTogaXNEZXZNb2RlKCksXG4gICAgICAgICAgICAvLyBsZXQgZXhwbGljaXQgdmFsdWVzIGZyb20gdGhlIGNvbXBpbGVyIG9wdGlvbnMgb3ZlcndyaXRlIG9wdGlvbnNcbiAgICAgICAgICAgIC8vIGZyb20gdGhlIGFwcCBwcm92aWRlcnNcbiAgICAgICAgICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBvcHRzLmRlZmF1bHRFbmNhcHN1bGF0aW9uLFxuICAgICAgICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBvcHRzLm1pc3NpbmdUcmFuc2xhdGlvbixcbiAgICAgICAgICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IG9wdHMucHJlc2VydmVXaGl0ZXNwYWNlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVwczogW11cbiAgICAgIH0sXG4gICAgICBvcHRzLnByb3ZpZGVycyAhXG4gICAgXSk7XG4gICAgcmV0dXJuIGluamVjdG9yLmdldChDb21waWxlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX21lcmdlT3B0aW9ucyhvcHRpb25zQXJyOiBDb21waWxlck9wdGlvbnNbXSk6IENvbXBpbGVyT3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgdXNlSml0OiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLnVzZUppdCkpLFxuICAgIGRlZmF1bHRFbmNhcHN1bGF0aW9uOiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLmRlZmF1bHRFbmNhcHN1bGF0aW9uKSksXG4gICAgcHJvdmlkZXJzOiBfbWVyZ2VBcnJheXMob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLnByb3ZpZGVycyAhKSksXG4gICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBfbGFzdERlZmluZWQob3B0aW9uc0Fyci5tYXAob3B0aW9ucyA9PiBvcHRpb25zLm1pc3NpbmdUcmFuc2xhdGlvbikpLFxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IF9sYXN0RGVmaW5lZChvcHRpb25zQXJyLm1hcChvcHRpb25zID0+IG9wdGlvbnMucHJlc2VydmVXaGl0ZXNwYWNlcykpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBfbGFzdERlZmluZWQ8VD4oYXJnczogVFtdKTogVHx1bmRlZmluZWQge1xuICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChhcmdzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhcmdzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBfbWVyZ2VBcnJheXMocGFydHM6IGFueVtdW10pOiBhbnlbXSB7XG4gIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydCAmJiByZXN1bHQucHVzaCguLi5wYXJ0KSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=