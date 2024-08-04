import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, mixin } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

// @Injectable()
// export class AuthorizeGuard implements CanActivate{

//     constructor(private reflector:Reflector){}
//     canActivate(context: ExecutionContext):boolean{
//         const allowedRoles=this.reflector.get<string[]>('allowedRoles',context.getHandler());
//         const request = context.switchToHttp().getRequest();
//         const result=request?.currentUser?.roles.map((role:string)=>allowedRoles.includes(role)).find
//         ((val:boolean) =>val===true);
//         if(result)return true;
//         throw new UnauthorizedException('Sorry you are not Athorized')
//     }
// }

export const AuthorizeGuard =(allowedRoles:string[])=>{
    class RolesGuardMixin implements CanActivate{
        canActivate(context: ExecutionContext):boolean{
            const request = context.switchToHttp().getRequest();
            const result=request?.currentUser?.roles.map((role:string)=>allowedRoles.includes(role)).find
            ((val:boolean) =>val===true);
            if(result)return true;
            throw new UnauthorizedException('Sorry you are not Athorized') 
        }

    }
    const guard =mixin(RolesGuardMixin);
    return guard;
}

