import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioService } from './modules/usuario/usuario.service';
import { UsuarioController } from './modules/usuario/usuario.controller';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [AppController, UsuarioController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}
