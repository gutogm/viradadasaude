# -*- coding: utf-8 -*-
"""
Created on Sat Apr  8 19:45:45 2017

@author: saulo
"""

#!/usr/bin/env python
# -*- coding: utf-8 -*-
from openpyxl import Workbook
from openpyxl import load_workbook
from openpyxl.compat import range
from openpyxl.utils import get_column_letter

def proximaColuna(colunaAtual):
    listaDeLetras="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if colunaAtual[-1] == "Z":
        return colunaAtual+"A"
    else:
        indice = listaDeLetras.find(colunaAtual[-1])
        
        colunaAtual=colunaAtual[:-1].join(listaDeLetras[indice+1])
        colunaAtual.join(listaDeLetras[indice+1])
        
        return colunaAtual
        
            
def abrirArquivo(path):
    planilha = load_workbook(filename = path)
        
    # nome das abas sheetnames
    for aba in planilha.sheetnames:
        count=1
        sheet_ranges = planilha[aba]
        coluna = "A"
        while str(sheet_ranges[coluna+str(count)].value)!="None":
            while str(sheet_ranges[coluna+str(count)].value)!="None":
                print sheet_ranges[coluna+str(count)].value
                coluna = coluna[:-1]+proximaColuna(coluna[-1])
            count+=1
            coluna = "A"
        
 
#abrirArquivo('BRASÍLIA - RELATÓRIO PRIMEIRO DESTINO DE ENCAMINHAMENTO.xlsx')
abrirArquivo('in.xlsx')