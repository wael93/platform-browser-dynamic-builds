/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Identifiers, getUrlScheme, syntaxError } from '@angular/compiler';
import { ANALYZE_FOR_ENTRY_COMPONENTS, ChangeDetectionStrategy, ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, LOCALE_ID, NgModuleFactory, NgModuleRef, QueryList, Renderer, SecurityContext, TRANSLATIONS_FORMAT, TemplateRef, ViewContainerRef, ViewEncapsulation, ɵCodegenComponentFactoryResolver, ɵEMPTY_ARRAY, ɵEMPTY_MAP, ɵReflectionCapabilities as ReflectionCapabilities, ɵand, ɵccf, ɵcmf, ɵcrt, ɵdid, ɵeld, ɵinlineInterpolate, ɵinterpolate, ɵmod, ɵmpd, ɵncd, ɵnov, ɵpad, ɵpid, ɵpod, ɵppd, ɵprd, ɵqud, ɵregisterModuleFactory, ɵstringify as stringify, ɵted, ɵunv, ɵvid } from '@angular/core';
export const MODULE_SUFFIX = '';
const builtinExternalReferences = createBuiltinExternalReferencesMap();
export class JitReflector {
    constructor() {
        this.reflectionCapabilities = new ReflectionCapabilities();
    }
    componentModuleUrl(type, cmpMetadata) {
        const moduleId = cmpMetadata.moduleId;
        if (typeof moduleId === 'string') {
            const scheme = getUrlScheme(moduleId);
            return scheme ? moduleId : `package:${moduleId}${MODULE_SUFFIX}`;
        }
        else if (moduleId !== null && moduleId !== void 0) {
            throw syntaxError(`moduleId should be a string in "${stringify(type)}". See https://goo.gl/wIDDiL for more information.\n` +
                `If you're using Webpack you should inline the template and the styles, see https://goo.gl/X2J8zc.`);
        }
        return `./${stringify(type)}`;
    }
    parameters(typeOrFunc) {
        return this.reflectionCapabilities.parameters(typeOrFunc);
    }
    tryAnnotations(typeOrFunc) { return this.annotations(typeOrFunc); }
    annotations(typeOrFunc) {
        return this.reflectionCapabilities.annotations(typeOrFunc);
    }
    shallowAnnotations(typeOrFunc) {
        throw new Error('Not supported in JIT mode');
    }
    propMetadata(typeOrFunc) {
        return this.reflectionCapabilities.propMetadata(typeOrFunc);
    }
    hasLifecycleHook(type, lcProperty) {
        return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
    }
    guards(type) { return this.reflectionCapabilities.guards(type); }
    resolveExternalReference(ref) {
        return builtinExternalReferences.get(ref) || ref.runtime;
    }
}
function createBuiltinExternalReferencesMap() {
    const map = new Map();
    map.set(Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS, ANALYZE_FOR_ENTRY_COMPONENTS);
    map.set(Identifiers.ElementRef, ElementRef);
    map.set(Identifiers.NgModuleRef, NgModuleRef);
    map.set(Identifiers.ViewContainerRef, ViewContainerRef);
    map.set(Identifiers.ChangeDetectorRef, ChangeDetectorRef);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJfcmVmbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3NyYy9jb21waWxlcl9yZWZsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFzQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzlHLE9BQU8sRUFBQyw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBYSxnQkFBZ0IsRUFBRSx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZ0NBQWdDLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsSUFBSSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLFVBQVUsSUFBSSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFNW9CLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDaEMsTUFBTSx5QkFBeUIsR0FBRyxrQ0FBa0MsRUFBRSxDQUFDO0FBRXZFLE1BQU0sT0FBTyxZQUFZO0lBQXpCO1FBQ1UsMkJBQXNC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QUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3IsIEV4dGVybmFsUmVmZXJlbmNlLCBJZGVudGlmaWVycywgZ2V0VXJsU2NoZW1lLCBzeW50YXhFcnJvcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBMT0NBTEVfSUQsIE5nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVSZWYsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIsIFNlY3VyaXR5Q29udGV4dCwgVFJBTlNMQVRJT05TX0ZPUk1BVCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCDJtUNvZGVnZW5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIMm1RU1QVFlfQVJSQVksIMm1RU1QVFlfTUFQLCDJtVJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgYXMgUmVmbGVjdGlvbkNhcGFiaWxpdGllcywgybVhbmQsIMm1Y2NmLCDJtWNtZiwgybVjcnQsIMm1ZGlkLCDJtWVsZCwgybVpbmxpbmVJbnRlcnBvbGF0ZSwgybVpbnRlcnBvbGF0ZSwgybVtb2QsIMm1bXBkLCDJtW5jZCwgybVub3YsIMm1cGFkLCDJtXBpZCwgybVwb2QsIMm1cHBkLCDJtXByZCwgybVxdWQsIMm1cmVnaXN0ZXJNb2R1bGVGYWN0b3J5LCDJtXN0cmluZ2lmeSBhcyBzdHJpbmdpZnksIMm1dGVkLCDJtXVudiwgybV2aWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTU9EVUxFX1NVRkZJWCA9ICcnO1xuY29uc3QgYnVpbHRpbkV4dGVybmFsUmVmZXJlbmNlcyA9IGNyZWF0ZUJ1aWx0aW5FeHRlcm5hbFJlZmVyZW5jZXNNYXAoKTtcblxuZXhwb3J0IGNsYXNzIEppdFJlZmxlY3RvciBpbXBsZW1lbnRzIENvbXBpbGVSZWZsZWN0b3Ige1xuICBwcml2YXRlIHJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgPSBuZXcgUmVmbGVjdGlvbkNhcGFiaWxpdGllcygpO1xuXG4gIGNvbXBvbmVudE1vZHVsZVVybCh0eXBlOiBhbnksIGNtcE1ldGFkYXRhOiBDb21wb25lbnQpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1vZHVsZUlkID0gY21wTWV0YWRhdGEubW9kdWxlSWQ7XG5cbiAgICBpZiAodHlwZW9mIG1vZHVsZUlkID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3Qgc2NoZW1lID0gZ2V0VXJsU2NoZW1lKG1vZHVsZUlkKTtcbiAgICAgIHJldHVybiBzY2hlbWUgPyBtb2R1bGVJZCA6IGBwYWNrYWdlOiR7bW9kdWxlSWR9JHtNT0RVTEVfU1VGRklYfWA7XG4gICAgfSBlbHNlIGlmIChtb2R1bGVJZCAhPT0gbnVsbCAmJiBtb2R1bGVJZCAhPT0gdm9pZCAwKSB7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihcbiAgICAgICAgICBgbW9kdWxlSWQgc2hvdWxkIGJlIGEgc3RyaW5nIGluIFwiJHtzdHJpbmdpZnkodHlwZSl9XCIuIFNlZSBodHRwczovL2dvby5nbC93SUREaUwgZm9yIG1vcmUgaW5mb3JtYXRpb24uXFxuYCArXG4gICAgICAgICAgYElmIHlvdSdyZSB1c2luZyBXZWJwYWNrIHlvdSBzaG91bGQgaW5saW5lIHRoZSB0ZW1wbGF0ZSBhbmQgdGhlIHN0eWxlcywgc2VlIGh0dHBzOi8vZ29vLmdsL1gySjh6Yy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYC4vJHtzdHJpbmdpZnkodHlwZSl9YDtcbiAgfVxuICBwYXJhbWV0ZXJzKHR5cGVPckZ1bmM6IC8qVHlwZSovIGFueSk6IGFueVtdW10ge1xuICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucGFyYW1ldGVycyh0eXBlT3JGdW5jKTtcbiAgfVxuICB0cnlBbm5vdGF0aW9ucyh0eXBlT3JGdW5jOiAvKlR5cGUqLyBhbnkpOiBhbnlbXSB7IHJldHVybiB0aGlzLmFubm90YXRpb25zKHR5cGVPckZ1bmMpOyB9XG4gIGFubm90YXRpb25zKHR5cGVPckZ1bmM6IC8qVHlwZSovIGFueSk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLmFubm90YXRpb25zKHR5cGVPckZ1bmMpO1xuICB9XG4gIHNoYWxsb3dBbm5vdGF0aW9ucyh0eXBlT3JGdW5jOiAvKlR5cGUqLyBhbnkpOiBhbnlbXSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3Qgc3VwcG9ydGVkIGluIEpJVCBtb2RlJyk7XG4gIH1cbiAgcHJvcE1ldGFkYXRhKHR5cGVPckZ1bmM6IC8qVHlwZSovIGFueSk6IHtba2V5OiBzdHJpbmddOiBhbnlbXX0ge1xuICAgIHJldHVybiB0aGlzLnJlZmxlY3Rpb25DYXBhYmlsaXRpZXMucHJvcE1ldGFkYXRhKHR5cGVPckZ1bmMpO1xuICB9XG4gIGhhc0xpZmVjeWNsZUhvb2sodHlwZTogYW55LCBsY1Byb3BlcnR5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLmhhc0xpZmVjeWNsZUhvb2sodHlwZSwgbGNQcm9wZXJ0eSk7XG4gIH1cbiAgZ3VhcmRzKHR5cGU6IGFueSk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHsgcmV0dXJuIHRoaXMucmVmbGVjdGlvbkNhcGFiaWxpdGllcy5ndWFyZHModHlwZSk7IH1cbiAgcmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlKHJlZjogRXh0ZXJuYWxSZWZlcmVuY2UpOiBhbnkge1xuICAgIHJldHVybiBidWlsdGluRXh0ZXJuYWxSZWZlcmVuY2VzLmdldChyZWYpIHx8IHJlZi5ydW50aW1lO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlQnVpbHRpbkV4dGVybmFsUmVmZXJlbmNlc01hcCgpIHtcbiAgY29uc3QgbWFwID0gbmV3IE1hcDxFeHRlcm5hbFJlZmVyZW5jZSwgYW55PigpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLkFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLkVsZW1lbnRSZWYsIEVsZW1lbnRSZWYpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLk5nTW9kdWxlUmVmLCBOZ01vZHVsZVJlZik7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuVmlld0NvbnRhaW5lclJlZiwgVmlld0NvbnRhaW5lclJlZik7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdG9yUmVmKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5RdWVyeUxpc3QsIFF1ZXJ5TGlzdCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuVGVtcGxhdGVSZWYsIFRlbXBsYXRlUmVmKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5Db2RlZ2VuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCDJtUNvZGVnZW5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5Db21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5KTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5Db21wb25lbnRSZWYsIENvbXBvbmVudFJlZik7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuTmdNb2R1bGVGYWN0b3J5LCBOZ01vZHVsZUZhY3RvcnkpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLmNyZWF0ZU1vZHVsZUZhY3RvcnksIMm1Y21mKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5tb2R1bGVEZWYsIMm1bW9kKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5tb2R1bGVQcm92aWRlckRlZiwgybVtcGQpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLlJlZ2lzdGVyTW9kdWxlRmFjdG9yeUZuLCDJtXJlZ2lzdGVyTW9kdWxlRmFjdG9yeSk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuSW5qZWN0b3IsIEluamVjdG9yKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5WaWV3RW5jYXBzdWxhdGlvbiwgVmlld0VuY2Fwc3VsYXRpb24pO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLkNoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuU2VjdXJpdHlDb250ZXh0LCBTZWN1cml0eUNvbnRleHQpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLkxPQ0FMRV9JRCwgTE9DQUxFX0lEKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5UUkFOU0xBVElPTlNfRk9STUFULCBUUkFOU0xBVElPTlNfRk9STUFUKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5pbmxpbmVJbnRlcnBvbGF0ZSwgybVpbmxpbmVJbnRlcnBvbGF0ZSk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuaW50ZXJwb2xhdGUsIMm1aW50ZXJwb2xhdGUpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLkVNUFRZX0FSUkFZLCDJtUVNUFRZX0FSUkFZKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5FTVBUWV9NQVAsIMm1RU1QVFlfTUFQKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5SZW5kZXJlciwgUmVuZGVyZXIpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLnZpZXdEZWYsIMm1dmlkKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5lbGVtZW50RGVmLCDJtWVsZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuYW5jaG9yRGVmLCDJtWFuZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMudGV4dERlZiwgybV0ZWQpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLmRpcmVjdGl2ZURlZiwgybVkaWQpO1xuICBtYXAuc2V0KElkZW50aWZpZXJzLnByb3ZpZGVyRGVmLCDJtXByZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMucXVlcnlEZWYsIMm1cXVkKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5wdXJlQXJyYXlEZWYsIMm1cGFkKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5wdXJlT2JqZWN0RGVmLCDJtXBvZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMucHVyZVBpcGVEZWYsIMm1cHBkKTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5waXBlRGVmLCDJtXBpZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMubm9kZVZhbHVlLCDJtW5vdik7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMubmdDb250ZW50RGVmLCDJtW5jZCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMudW53cmFwVmFsdWUsIMm1dW52KTtcbiAgbWFwLnNldChJZGVudGlmaWVycy5jcmVhdGVSZW5kZXJlclR5cGUyLCDJtWNydCk7XG4gIG1hcC5zZXQoSWRlbnRpZmllcnMuY3JlYXRlQ29tcG9uZW50RmFjdG9yeSwgybVjY2YpO1xuICByZXR1cm4gbWFwO1xufSJdfQ==