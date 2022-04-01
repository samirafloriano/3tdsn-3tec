<?php
include "Conexao.php";
class Computador{
    private int $id;
    private string $processador;
    private int $usb;
    private bool $atualizado;
    private string $dataAtualizacao;

    public function __construct($processador, $usb, $atualizado, $dataAtualizacao){
        $this->processador = $processador;
        $this->usb = $usb;
        $this->atualizado = $atualizado;
        $this->dataAtualizacao = $dataAtualizacao;
    }
    
    public function Cadastrar(){
        $conexao = new Conexao();
        $sql = "INSERT INTO
        tblComputador(Processador, USB, Atualizacao, DataAtualizacao)
        VALUES (:processador,:usb,:atualizado,:dataAtualizacao)";
        $pdo = $conexao->Conectar();
        $preview = $pdo->prepare($sql);
        $preview->bindParam(':processador', $this->Processador);
        $preview->bindParam(':usb', $this->USB);
        $preview->bindParam(':atualizado', $this->Atualizacao);
        $preview->bindParam(':dataAtualizacao', $this->DataAtualizacao);
        $preview->execute();
    }
    
    public static function ListarTodos(){
        $conexao = new Conexao();
        $sql = "SELECT * FROM tblComputador";
        $dados = $conexao->Consultar($sql);
        return $dados;
    }
}